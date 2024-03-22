from flask import Flask, request, jsonify,render_template
import joblib
import numpy as np

app = Flask(__name__,template_folder='templates')

# Load the pickled model
model = joblib.load('./Emotion_Voice_Detection_Model.pkl')



@app.route('/')
def index():
    return render_template("index.html")
    #     template_path = 'index.html'
    #     print("Attempting to render template:", template_path)
        
    # except Exception as e:
    #     print("Error:", str(e))
    #     return "An error occurred while rendering the template."




# Define a route for prediction
@app.route('/api/predict', methods=['POST'])
def predict():
    # Extract JSON data from the POST request
    data = request.json
    
#     # Preprocess the data if needed
#     # Example: Convert JSON data to numpy array
    features = np.array(data['features'])
    
    # Make predictions using the loaded model
    prediction = model.predict(features.reshape(1, -1))
    
#     # Return the prediction as a JSON response
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
