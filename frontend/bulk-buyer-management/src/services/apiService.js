import axios from 'axios';

const apiService = {
    registerBuyer: (buyerData) => axios.post('/api/buyers/register', buyerData),
    getInventory: () => axios.get('/api/inventory'),
    checkQuality: (qualityData) => axios.post('/api/quality/check-quality', qualityData),
};

export default apiService;
