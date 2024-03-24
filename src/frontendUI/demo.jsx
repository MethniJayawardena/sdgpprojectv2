import React, { useEffect, useRef } from 'react';
import backgroundImage from '../images/mic1.jpg';

const InterviewDemo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/predict', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('predictionResult').innerText = 'Predicted Emotion: ' + data.predicted_emotion;
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container mx-auto py-80 relative bg-contain" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="text-5xl font-bold mb-4 text-[#0C024B]"> Emotion Prediction</h1>
      <div className="grid grid-cols-2 gap-8">
        {/* Audio Input Section */}
        <div>
        <form id="uploadForm" encType="multipart/form-data" onSubmit={handleSubmit}>
          <input type="file" name="audio" accept=".wav" />
          <button type="submit">Predict</button>
        </form>
        <div id="predictionResult"></div>
        </div>
        </div>
        {/* Feedback Section */}
        <div style={{ marginLeft: 'auto', marginLeft: '60rem' }}> {/* Adjust marginRight as needed */}
          <h2 className="text-xl font-bold mb-2">Feedback</h2>
          {/* Placeholder for feedback message */}
          <p className="text-gray-600">Awaiting input....</p>
      </div>
    </div>
  );
};

export default InterviewDemo;
