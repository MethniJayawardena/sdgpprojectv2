from flask import Flask, render_template, request, jsonify
import librosa
import numpy as np
from joblib import load

app = Flask(__name__)

<<<<<<< HEAD:SpeechAnalysis/app.py
# Loads the model and encoder
model = load('emotion_detection_model.joblib')
enc = load('label_encoder.joblib')
=======
# Load the model and encoder
model = load('/Users/shehanfernando/Downloads/sdgpprojectv2/SpeechAnalysis/emotion_detection_model.joblib')
enc = load('/Users/shehanfernando/Downloads/sdgpprojectv2/SpeechAnalysis/label_encoder.joblib')
>>>>>>> d392c3f482b8afeac05e994a46ebe086d5da45d3:SpeechAnalysis/model.py

# Function to extract MFCC features
def extract_mfcc(audio_file_path):
    data, sampling_rate = librosa.load(audio_file_path)
    mfcc_features = librosa.feature.mfcc(y=data, sr=sampling_rate, n_mfcc=40)
    return np.mean(mfcc_features.T, axis=0)

@app.route('/predict', methods=['POST'])
def predict():
    if 'audio' not in request.files:
        return jsonify({'error': 'No audio file provided'}), 400
    
    audio_file = request.files['audio']
    if audio_file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if audio_file and audio_file.filename.endswith('.wav'):
        audio_file.save('uploaded_audio.wav')
        input_features = extract_mfcc('uploaded_audio.wav')
        input_features = input_features.reshape(1, -1)
        predictions = model.predict(input_features)
        predicted_emotion = enc.inverse_transform(predictions)
        return jsonify({'predicted_emotion': predicted_emotion[0]})
    else:
        return jsonify({'error': 'Invalid file format. Please provide a .wav file'}), 400

if __name__ == '__main__':
    app.run(debug=True)