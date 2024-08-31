import React, { useState } from 'react';
import apiService from '../services/apiService';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        preferredSlot: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiService.registerBuyer(formData);
            alert('Buyer registered successfully!');
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <div>
            <h2>Register Bulk Buyer</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="preferredSlot"
                    placeholder="Preferred Slot"
                    value={formData.preferredSlot}
                    onChange={handleChange}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
