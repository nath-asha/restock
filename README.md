# restock
# Bulk Buyer Management System

## Overview

The Bulk Buyer Management System is designed to streamline the purchasing process for bulk buyers, such as families, bachelors, and large groups, while ensuring efficient inventory management and maintaining high product quality. This system includes a registration portal for bulk buyers, an inventory management backend, and a machine learning component to predict product expiration and optimize stock levels.

## Features

- **Bulk Buyer Registration**: Allows users to register for scheduled shopping slots, reducing overcrowding and ensuring a smooth shopping experience.
- **Inventory Management**: Tracks inventory details, including product quantities, expiration dates, and quality statuses.
- **Machine Learning Integration**: Predicts product expiration and optimizes inventory levels using historical data.
- **Quality Management**: Proactively manages product quality and notifies buyers if products are nearing expiration.
- **Admin Dashboard**: Provides administrators with real-time insights into inventory levels, buyer behavior, and quality alerts.

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js
- **Machine Learning**: Python, Scikit-Learn, Flask
- **Database**: MongoDB

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Python 3.x
- npm (Node Package Manager)
- Virtual Environment (Python)

### Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/bulk-buyer-management.git
    cd bulk-buyer-management
    ```

2. **Backend Setup**:
    - Navigate to the `backend` directory:
      ```bash
      cd backend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Start the backend server:
      ```bash
      node server.js
      ```

3. **Machine Learning API Setup**:
    - Navigate to the `ml` directory:
      ```bash
      cd ../ml
      ```
    - Set up a Python virtual environment:
      ```bash
      python3 -m venv venv
      source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
      ```
    - Install Python dependencies:
      ```bash
      pip install -r requirements.txt
      ```
    - Train the ML model:
      ```bash
      python train_model.py
      ```
    - Start the Flask API:
      ```bash
      python app.py
      ```

4. **Frontend Setup**:
    - Navigate to the `frontend` directory:
      ```bash
      cd ../frontend/bulk-buyer-management
      ```
    - Install frontend dependencies:
      ```bash
      npm install
      ```
    - Start the React frontend:
      ```bash
      npm start
      ```

### Testing

- Access the application in your browser at `http://localhost:3000`.
- The backend API runs on `http://localhost:3000/api`.
- The ML API runs on `http://localhost:5001`.

### Deployment

- Use platforms like Heroku or DigitalOcean for the backend and Flask API.
- Deploy the React frontend using Vercel or Netlify.

## Directory Structure

```bash
bulk-buyers-management/
│
├── backend/
│   ├── models.js
│   ├── routes.js
│   └── server.js
│
├── frontend/
│   └── bulk-buyer-management/
│       ├── src/
│       │   ├── App.js
│       │   ├── InventoryDashboard.js
│       │   └── ...
│       └── ...
│
└── ml/
    ├── app.py
    ├── train_model.py
    ├── expiry_predictor.pkl
    └── ...
