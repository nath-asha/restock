import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const InventoryList = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await apiService.getInventory();
                setInventory(response.data);
            } catch (error) {
                console.error('Failed to fetch inventory:', error.message);
            }
        };

        fetchInventory();
    }, []);

    return (
        <div>
            <h2>Inventory List</h2>
            <ul>
                {inventory.map((item) => (
                    <li key={item._id}>
                        {item.productName} - {item.quantity} units - Expiration Date: {new Date(item.expirationDate).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryList;
