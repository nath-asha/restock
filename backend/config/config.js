module.exports = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/bulkBuyerSystem',
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || 'yourSecretKey',
    mlApiUrl: process.env.ML_API_URL || 'http://localhost:5001/predict',
};
