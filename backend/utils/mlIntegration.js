const axios = require('axios');
const config = require('../config/config');

const predictProductQuality = async (data) => {
    try {
        const response = await axios.post(config.mlApiUrl, data);
        return response.data;
    } catch (error) {
        console.error('ML API call failed:', error.message);
        throw new Error('Failed to predict product quality');
    }
};

module.exports = { predictProductQuality };
