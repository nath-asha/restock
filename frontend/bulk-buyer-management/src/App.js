// frontend/App.js

import React from 'react';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import InventoryList from './components/InventoryList';
import QualityAlert from './components/QualityAlert';

import './App.css';

const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Bulk Buyer Management System</h1>
            </header>
            <main className="app-main">
                <section>
                    <Register />
                </section>
                <section>
                    <InventoryList />
                </section>
                <section>
                    <QualityAlert />
                </section>
                <section>
                    <Dashboard />
                </section>
            </main>
        </div>
    );
};

export default App;
