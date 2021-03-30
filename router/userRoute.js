const express = require('express');

const userController = require('./../controllers/userController');

const router = express.Router();

router.route('/').post(userController.signup);
router.route('/activateUser/:token').post(userController.activateUser);


module.exports = router;
