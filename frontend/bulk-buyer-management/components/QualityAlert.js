import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const QualityAlert = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const checkQuality = async () => {
            try {
                const inventory = await apiService.getInventory();
                const qualityChecks = await Promise.all(
                    inventory.data.map(async (item) => {
                        const data = {
                            daysUntilExpiration: Math.floor((new Date(item.expirationDate) - new Date()) / (1000 * 60 * 60 * 24)),
                            salesVelocity: Math.random() * 10, // Example sales velocity
                            seasonalityIndex: Math.random() * 10, // Example seasonality index
                        };
                        const response = await apiService.checkQuality(data);
                        return {
                            ...item,
                            qualityStatus: response.qualityStatus,
                        };
                    })
                );
                setAlerts(qualityChecks.filter((item) => item.qualityStatus !== 'Good'));
            } catch (error) {
                console.error('Failed to perform quality check:', error.message);
            }
        };

        checkQuality();
    }, []);

    return (
        <div>
            <h2>Quality Alerts</h2>
            <ul>
                {alerts.map((alert) => (
                    <li key={alert._id}>
                        {alert.productName} - {alert.quantity} units - Status: {alert.qualityStatus}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QualityAlert;
