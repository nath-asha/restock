import pandas as pd
from sklearn.preprocessing import LabelEncoder

def preprocess(data):
    data['purchase_date'] = pd.to_datetime(data['purchase_date'])
    data['expiration_date'] = pd.to_datetime(data['expiration_date'])
    
    data['days_until_expiration'] = (data['expiration_date'] - data['purchase_date']).dt.days
    
    le = LabelEncoder()
    data['product_name'] = le.fit_transform(data['product_name'])
    
    X = data[['product_name', 'quantity', 'days_until_expiration']]
    y = data['days_until_expiration'] <= 5  # expires in 5 days or less
    
    return X, y
