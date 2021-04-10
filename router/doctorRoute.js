const express = require('express');

const doctorController = require('./../controllers/doctorController');

const router = express.Router();

router.route('/').post(doctorController.signup);
router.route('/activateDoctor/:token').post(doctorController.activateDoctor);

module.exports = router;
