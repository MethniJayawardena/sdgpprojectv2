from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
import librosa
import numpy as np
from joblib import load

# Load the model and encoder (assuming they're in the same directory)
model = load("./emotion_detection_model.joblib")
enc = load("./label_encoder.joblib")

app = FastAPI()

class AudioData(BaseModel):
  audio: UploadFile

@app.post("/pred", response_model=dict, status_code=200)
async def predict(data: AudioData):
  audio_file = data.audio
  if not audio_file.content_type.startswith("audio/"):
    return {"error": "Invalid file format. Please provide an audio file."}
  
  try:
    # Read audio data
    audio_data = await audio_file.read()
  
    # Extract MFCC features
    data, sampling_rate = librosa.load(audio_data, sr=None)  # Use provided sampling rate
    mfcc_features = librosa.feature.mfcc(y=data, sr=sampling_rate, n_mfcc=40)
    input_features = np.mean(mfcc_features.T, axis=0)
    input_features = input_features.reshape(1, -1)
  
    # Make prediction
    predictions = model.predict(input_features)
    predicted_emotion = enc.inverse_transform(predictions)[0]
  
    return {"predicted_emotion": predicted_emotion}
  except Exception as e:
    return {"error": f"An error occurred: {str(e)}"}

if __name__ == "__main__":
  import uvicorn
  uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
