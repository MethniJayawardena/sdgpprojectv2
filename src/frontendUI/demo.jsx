import React, { useEffect, useRef } from 'react';
import backgroundImage from '../images/mic1.jpg'

const InterviewDemo = () => {

  return (
    <div className="container mx-auto py-80 relative bg-contain" style={ {backgroundImage: `url(${backgroundImage})`}}>
       <h1 className="text-5xl font-bold mb-4 text-[#0C024B]"> Interview Demo</h1>
      <div className="grid grid-cols-2 gap-8">
        {/* Audio Input Section */}
        
        {/* Feedback Section */}
        <div style={{ marginLeft: 'auto', marginLeft: '60rem' }}> {/* Adjust marginRight as needed */}
          <h2 className="text-xl font-bold mb-2">Feedback</h2>
          {/* Placeholder for feedback message */}
          <p className="text-gray-600">Awaiting input....</p>
        </div>
      </div>
    </div>
  );
};

export default InterviewDemo;
