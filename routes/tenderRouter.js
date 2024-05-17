var express = require('express');
var router = express.Router();
const tenderController = require('../controllers/tenderController');

router.get('/tenders', tenderController.getAllActiveTenders);
router.get('/tenders/:id', tenderController.getTenderById);
router.get('/tenders-completed', tenderController.getAllCompletedTenders);
router.get('/tenders-add', tenderController.addTender)
router.post('/tenders-add', tenderController.addedTender)

module.exports = router;
