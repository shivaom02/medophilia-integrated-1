const SGmail = require('@sendgrid/mail');

module.exports = async (msg) => {
  try {
    await SGmail.send(msg);
    console.log('Authentication message sent!');
  } catch (error) {
    console.error(error.message);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
