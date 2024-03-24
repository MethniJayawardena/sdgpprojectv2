import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Rooms = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigateToDemo = () => {
    navigate('/demo'); // Navigate to the demo page
  };

  const navigateToQuestionnaire = ()=> {
    navigate('/questionnaire')
  }
  return (
    <div className={`max-w-[1400px] h-[500px] ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4`}>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>OUR COURSE PROGRAMS</h3>
        <p className={`pt-4 ${darkMode ? 'text-white' : 'text-black'}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <div className="relative hover:scale-105">
          <img
            className='object-cover w-full h-full'
            src='https://img.freepik.com/premium-vector/voice-assistant-sound-wave-microphone-voice-control-technology-voice-sound-recognition-ai-assistant-voice-background_176516-289.jpg'
            alt='/'
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-65 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-black px-4 py-2 rounded" onClick={navigateToDemo}>Learn More</button>
          </div>
        </div>
        <img
          className='row-span-2 object-cover w-full h-full relative'
          src='https://img.freepik.com/free-photo/hacker-man-laptop_144627-25494.jpg?t=st=1710226873~exp=1710230473~hmac=3555c9bb605e57978282ed1003e517ff9ae5a13913c72f11ea21cda3a63fb2a7&w=740'
          alt='/'
        />
        <div className="relative hover:scale-105">
          <img
            className='object-cover w-full h-full'
            src='https://codequotient.com/blog/wp-content/uploads/2023/03/How-to-Ace-Your-Online-Coding-Test-Tips-and-Tricks-from-Experts.jpg'
            alt='/'
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-65 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-black px-4 py-2 rounded" onClick={navigateToQuestionnaire}>Learn More</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Rooms;
