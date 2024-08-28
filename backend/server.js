const express = require('express');
const connectDB = require('./config/db');
const buyerRoutes = require('./routes/buyerRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const qualityRoutes = require('./routes/qualityRoutes');
const config = require('./config/config');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/buyers', buyerRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/quality', qualityRoutes);

const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
