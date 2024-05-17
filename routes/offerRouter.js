var express = require('express');
var router = express.Router();
const offerController = require('../controllers/offerController');

router.get('/offers-add/:tenderId', offerController.addOffer)
router.post('/offers-add/:tenderId', offerController.addedOffer)

module.exports = router;
