import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>About Us</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          INTERNOVA
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            PREPARATION WEB APP .
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        At Internova, we're dedicated to empowering aspiring professionals in the IT field. Our flagship courses,
         Interview Demo and Coding Questionnaire, offer tailored training to enhance your skills for career success.
          Through simulated interviews and curated coding challenges, we bridge the gap between education and industry, 
          fostering a supportive environment for growth and connection. Join us and take the first step towards a fulfilling career in technology.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            Get Started
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;