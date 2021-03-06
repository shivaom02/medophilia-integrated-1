const express = require('express')
const route = express.Router()
// const Auth = require('../middlewares/auth')
// const { adminAuth, Role } = require('../middlewares/adminAuth')
const userRouter = require('./User/user')
const docRouter=require("./Doctor/doctor");
const pharmaRouter=require("./Pharma/pharma");
const hospitalRouter = require('./Hospital/hospital');

// const adminRouter = require('./admin')

route.use('/user', userRouter);

route.use('/doc', docRouter);

route.use('/pharma',pharmaRouter);

route.use('/admin',hospitalRouter);


// router.use('/admin', adminRouter)

// router.get('/', (req, res) => {
//     res.render('index')
// })

// to test auth only
// router.get(
//     '/auth-test',
//     adminAuth([Role.Viewer, Role.Moderator]),
//     (req, res) => {
//         res.send('Auth working ')
//     }
// )
// router.get('*', (req, res, next) => {
//     const error = new Error('Invalid Endpoint')
//     error.statusCode = 404
//     next(error)
// })

// router.use((error, req, res, next) => {
//     console.error(error.message)
//     res.status(error.statusCode || 500).json({
//         error: true,
//         message: error.message || 'An Error Occured',
//         route: req.url,
//     })
// })

module.exports = route
