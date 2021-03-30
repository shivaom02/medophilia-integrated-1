const express = require('express');
const cors = require('cors');
const app = express();

// importiong routers
const userRouter = require('./router/userRoute');

// use middlewares
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
    console.log('API Running...');
});

app.use('/api/v1/user', userRouter);
// app.use('/api/v1/doctor', doctorRouter);
// app.use('/api/v1/hospital', hospitalRouter);
// app.use('/api/v1/pharma', pharmaRouter);

module.exports = app;