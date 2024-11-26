const axios = require('axios');
const { MutualFund, FundFamily } = require('../models');

exports.getFunds = async (req, res) => {
    try {
        const response = await axios.get('https://latest-mutual-fund-nav.p.rapidapi.com/api/families', {
            headers: { 'X-RapidAPI-Key': process.env.RAPIDAPI_KEY },
        });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching fund families' });
    }
};

exports.getFundDetails = async (req, res) => {
    const { familyId } = req.params;
    try {
        const response = await axios.get(`https://latest-mutual-fund-nav.p.rapidapi.com/api/schemes?family=${familyId}`, {
            headers: { 'X-RapidAPI-Key': process.env.RAPIDAPI_KEY },
        });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching schemes' });
    }
};
