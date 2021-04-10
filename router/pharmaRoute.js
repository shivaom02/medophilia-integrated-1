const express = require('express');

const pharmaController = require('./../controllers/pharmaController');

const router = express.Router();

router.route('/').post(pharmaController.signup);
router.route('/activatePharma/:token').post(pharmaController.activatePharma);

module.exports = router;
 