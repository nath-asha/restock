from flask import Flask, request, jsonify
import pickle
import pandas as pd
from preprocess_data import preprocess

app = Flask(__name__)

# Load the trained model
with open('expiry_predictor.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    df = pd.DataFrame(data)
    X, _ = preprocess(df)
    predictions = model.predict(X)
    return jsonify(predictions.tolist())

if __name__ == '__main__':
    app.run(debug=True)
