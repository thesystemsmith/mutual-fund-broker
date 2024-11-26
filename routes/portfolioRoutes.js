const express = require('express');
const router = express.Router();
const { addToPortfolio } = require('../controllers/portfolioController');

router.post('/', addToPortfolio);

module.exports = router;
