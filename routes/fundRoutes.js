const express = require('express');
const { getFunds, getFundDetails } = require('../controllers/fundController');
const router = express.Router();

router.get('/families', getFunds);
router.get('/:familyId/schemes', getFundDetails);

module.exports = router;
