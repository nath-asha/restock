import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle
from preprocess_data import preprocess

data = pd.read_csv('inventory_data.csv')

X, y = preprocess(data)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

with open('expiry_predictor.pkl', 'wb') as file:
    pickle.dump(model, file)

print("Model training complete and saved as 'expiry_predictor.pkl'")
