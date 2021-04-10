const express = require('express');

const hospitalController = require('./../controllers/hospitalController');

const router = express.Router();

router.route('/').post(hospitalController.signup);
router.route('/activateHospital/:token').post(hospitalController.activateHospital);

module.exports = router;
