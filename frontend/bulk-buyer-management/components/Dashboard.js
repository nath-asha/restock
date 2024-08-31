import React from 'react';
import Register from './Register';
import InventoryList from './InventoryList';
import QualityAlert from './QualityAlert';

const Dashboard = () => {
    return (
        <div>
            <h1>Bulk Buyer Management Dashboard</h1>
            <Register />
            <InventoryList />
            <QualityAlert />
        </div>
    );
};

export default Dashboard;
