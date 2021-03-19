const express = require('express');
const cors = require('cors');
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
    console.log('API Running...');
})

module.exports = app;