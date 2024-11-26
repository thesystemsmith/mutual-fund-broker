exports.addToPortfolio = async (req, res) => {
    try {
        const { fundId, amount } = req.body; // Get the data from the request body

        // Check if the fundId and amount are provided
        if (!fundId || !amount) {
            return res.status(400).json({ error: 'Fund ID and amount are required' });
        }

        // Logic to add the fund to the user's portfolio (example: save it to the database)
        // For now, just returning the data as a mock response
        // Replace this with actual database logic later
        res.status(201).json({
            message: 'Fund added to portfolio successfully',
            data: { fundId, amount }
        });
    } catch (error) {
        console.error('Error adding to portfolio:', error);
        res.status(500).json({ error: 'Error adding to portfolio' });
    }
};
