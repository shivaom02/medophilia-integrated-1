const SGmail = require('@sendgrid/mail');
const jwt = require('jsonwebtoken');

const Doctor = require('./../models/Doctor');
const sendAuthEmail = require('./../utils/sendAuthEmail');

const jwtToken = process.env.jwtToken;
const CLIENT_URL = process.env.CLIENT_URL;
const API_KEY = process.env.SENDGRID_APIKEY;

SGmail.setApiKey(API_KEY);

// sign up
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  let doctor = await Doctor.findOne({ email });
  if (doctor) return res.status(400).json({ msg: 'Doctor already exists!' });

  try {
    const token = jwt.sign({ name, email, password }, jwtToken, {
      expiresIn: '20m'
    });

    // Sending Mail
    const msg = {
      to: email,
      from: {
        name: 'no-reply@medophilia.com',
        email: 'shivaom1907@gmail.com'
      },
      subject: 'Email Confirmation',
      text: `
  Click on the below link to verify your email:
  ${CLIENT_URL}/api/v1/doctor/activateDoctor/${token}
  `,
      html: `
  <h2>Click on the below link to verify your email: </a>
  <a href="${CLIENT_URL}/api/v1/Doctor/activateDoctor/${token}">Verify your email</a>
  `
    };

    sendAuthEmail(msg);

    res.status(200).json({ msg: 'Verify your email within 20 minutes!' });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// create and activate Doctor account

exports.activateDoctor = async (req, res) => {
  const token = req.params.token;
  if (token) {
    jwt.verify(token, jwtToken, async (err, decodedToken) => {
      if (err) {
        return res.status(400).json({ msg: 'Incorrect or Expired link!' });
      }

      const { name, email, password } = decodedToken;

      try {
        let doctor = await Doctor.findOne({ email });
        if (doctor) return res.status(400).json({ msg: 'Doctor already exists!' });
        let newDoctor = new Doctor({
          name,
          email,
          password
        });

        await newDoctor.save();
        res.status(200).json({
          msg: 'Sign Up success!',
          newDoctor
        });
      } catch (error) {
        console.error(error.message);
        res
          .status(500)
          .send('Internal Server Error, during email verification!');
      }
    });
  } else {
    return res.json({ error: 'Email Not Verified!' });
  }
};
