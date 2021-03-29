const SGmail = require('@sendgrid/mail');
const jwt = require('jsonwebtoken');

const User = require('./../models/User');
const sendAuthEmail = require('./../utils/sendAuthEmail');

const jwtToken = process.env.jwtToken;
const CLIENT_URL = process.env.CLIENT_URL;
const API_KEY = process.env.SENDGRID_APIKEY;

SGmail.setApiKey(API_KEY);

// sign up
exports.signup = async (req, res) => {
  const { password, name, email, phone, age, sex, address } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(400).json({ msg: 'User already exists!' });

  try {
    const token = jwt.sign(
      { password, name, email, phone, age, sex, address },
      jwtToken,
      {
        expiresIn: '20m'
      }
    );

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
  ${CLIENT_URL}/api/v1/user/activateUser/${token}
  `,
      html: `
  <h2>Click on the below link to verify your email: </a>
  <a href="${CLIENT_URL}/api/v1/user/activateUser/${token}">Verify your email</a>
  `
    };

    sendAuthEmail(msg);

    res.status(200).json({ msg: 'Verify your email within 20 minutes!' });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// create and activate user account

exports.activateUser = async (req, res) => {
  const token = req.params.token;
  if (token) {
    jwt.verify(token, jwtToken, async (err, decodedToken) => {
      if (err) {
        return res.status(400).json({ msg: 'Incorrect or Expired link!' });
      }

      const { password, name, email, phone, age, sex, address } = decodedToken;

      try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists!' });
        let newUser = new User({
          name,
          email,
          password,
          phone,
          sex,
          age,
          address
        });

        await newUser.save();
        res.status(200).json({
          msg: 'Sign Up success!',
          newUser
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
