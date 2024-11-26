const cron = require('node-cron');
const axios = require('axios');
const { MutualFund, Portfolio } = require('../models');

cron.schedule('0 * * * *', async () => {
    const funds = await MutualFund.findAll();
    funds.forEach(async (fund) => {
        const response = await axios.get(`https://latest-mutual-fund-nav.p.rapidapi.com/api/nav/${fund.id}`, {
            headers: { 'X-RapidAPI-Key': process.env.RAPIDAPI_KEY },
        });
        fund.nav = response.data.nav;
        await fund.save();
    });
});
