const axios = require('axios');

exports.checkQuality = async (req, res) => {
    try {
        const { daysUntilExpiration, salesVelocity, seasonalityIndex } = req.body;
        const response = await axios.post('http://localhost:5001/predict', {
            days_until_expiration: daysUntilExpiration,
            sales_velocity: salesVelocity,
            seasonality_index: seasonalityIndex,
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Quality check failed', message: error.message });
    }
};
