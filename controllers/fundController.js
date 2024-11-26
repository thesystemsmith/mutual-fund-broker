const axios = require('axios');
const { MutualFund, FundFamily } = require('../models');

exports.getFunds = async (req, res) => {
    try {
        const response = await axios.get('https://latest-mutual-fund-nav.p.rapidapi.com/latest?Scheme_Type=Open', {
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            },
        });
        console.log("Fetched Funds Data:", response.data); // Log response data for debugging
        res.json(response.data);
    } catch (err) {
        console.error('Error fetching funds:', err.response ? err.response.data : err.message);
        res.status(500).json({ error: 'Error fetching fund families', details: err.message });
    }
};

exports.getFundDetails = async (req, res) => {
    const { familyId } = req.params;
    try {
        const response = await axios.get(`https://latest-mutual-fund-nav.p.rapidapi.com/api/schemes?family=${familyId}`, {
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            },
        });
        console.log("Fetched Fund Details:", response.data); // Log response data for debugging
        res.json(response.data);
    } catch (err) {
        console.error('Error fetching fund details:', err.response ? err.response.data : err.message);
        res.status(500).json({ error: 'Error fetching schemes', details: err.message });
    }
};
