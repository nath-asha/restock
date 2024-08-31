import pandas as pd
import pickle
from sklearn.metrics import accuracy_score, classification_report
from preprocess_data import preprocess

test_data = pd.read_csv('inventory_data_test.csv')

X_test, y_test = preprocess(test_data)

with open('expiry_predictor.pkl', 'rb') as file:
    model = pickle.load(file)

y_pred = model.predict(X_test)

print(f"Accuracy: {accuracy_score(y_test, y_pred)}")
print(f"Classification Report:\n{classification_report(y_test, y_pred)}")
