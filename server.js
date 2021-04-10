const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5000;
const DB = process.env.mongoDBURL.replace('<PASSWORD>', process.env.DB_PASSWORD);

// connecting to server
( async () => {
  try {
    await mongoose.connect( DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    
    console.log('Connected to Database...');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();

// port listen
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
