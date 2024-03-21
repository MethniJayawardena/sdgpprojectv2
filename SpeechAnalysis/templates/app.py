from flask import Flask, request, jsonify
import joblib
import numpy as np
import librosa

app = Flask(__name__)

# Load the trained ML model
model = joblib.load('./Emotion_Voice_Detection_Model.pkl')

# Function to extract features from an audio file
def extract_features(audio_file):
    # Load the audio file
    data, sampling_rate = librosa.load(audio_file)
    
    # Extract features (you can modify this based on your feature extraction method)
    # For example, you can use librosa to extract MFCCs, chroma features, etc.
    # Here, we'll just use a placeholder feature for demonstration
    feature = np.mean(data)  # Placeholder feature
    
    return feature

@app.route('/predict', methods=['POST'])
def predict_emotion():
    # Check if audio file is present in the request
    if 'file' not in request.files:
        return jsonify({'error': 'No audio file provided'}), 400
    
    audio_file = request.files['file']
    
    # Save the audio file temporarily
    audio_file.save('temp_audio.wav')
    
    # Extract features from the audio file
    features = extract_features('temp_audio.wav')
    
    # Make prediction using the trained model
    prediction = model.predict([features])[0]
    
    # Map prediction to emotion label (you can modify this based on your emotion mapping)
    emotions={
        '01':'neutral',
        '02':'calm',
        '03':'happy',
        '04':'sad',
        '05':'angry',
        '06':'fearful',
        '07':'disgust',
        '08':'surprised'
      }
    
    emotion_label = emotions.get(prediction, 'Unknown')
    
    # Return the predicted emotion
    return jsonify({'emotion': emotion_label}), 200

if __name__ == '__main__':
    app.run(debug=True)
