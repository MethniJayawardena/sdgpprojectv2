from flask import Flask, request, jsonify,send_from_directory
import joblib
import numpy as np

app = Flask(__name__)

# Load the pickled model
model = joblib.load('./Emotion_Voice_Detection_Model.pkl')

@app.route('/')
def index():
    return send_from_directory('templates', 'index.html')

# Define a route for prediction
@app.route('/api/predict', methods=['POST'])
def predict():
    # Extract JSON data from the POST request
    data = request.json
    
    # Preprocess the data if needed
    # Example: Convert JSON data to numpy array
    features = np.array(data['features'])
    
    # Make predictions using the loaded model
    prediction = model.predict(features.reshape(1, -1))
    
    # Return the prediction as a JSON response
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
