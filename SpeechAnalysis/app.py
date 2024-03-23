from flask import Flask, render_template, request, jsonify
import librosa
import numpy as np
from joblib import load

app = Flask(__name__)

# Load the model and encoder
model = load('emotion_detection_model.joblib')
enc = load('label_encoder.joblib')

# Function to extract MFCC features
def extract_mfcc(audio_file_path):
    data, sampling_rate = librosa.load(audio_file_path)
    mfcc_features = librosa.feature.mfcc(y=data, sr=sampling_rate, n_mfcc=40)
    return np.mean(mfcc_features.T, axis=0)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    audio_file = request.files['audio']
    audio_file.save('uploaded_audio.wav')
    input_features = extract_mfcc('uploaded_audio.wav')
    input_features = input_features.reshape(1, -1)
    predictions = model.predict(input_features)
    predicted_emotion = enc.inverse_transform(predictions)
    return jsonify({'predicted_emotion': predicted_emotion[0]})

if __name__ == '__main__':
    app.run(debug=True)
