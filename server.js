const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');

require('./server/db/connection');

const PORT = 5000;

// port listen
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
