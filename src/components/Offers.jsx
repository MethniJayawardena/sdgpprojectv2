import React from 'react';
import { SlGraduation } from 'react-icons/sl';


  
  const poppins = {
    fontFamily: '"Poppins", sans-serif',
  };
const Offers = () => {
  return (
    <div className='max-w-[900px]- m-auto px-4 py-12 flex flex-wrap justify-between' style={poppins}>
      <div className="flex items-center mb-4">
        <SlGraduation className="mr-2 text-gray-500" style={{ fontSize: '24px', fontWeight: 'bold' }} />
        <p className='text-lg font-bold text-gray-700'>Coding Questionaires</p>
      </div>
      <div className="flex items-center mb-4">
        <SlGraduation className="mr-2 text-gray-500" style={{ fontSize: '24px', fontWeight: 'bold' }} />
        <p className='text-lg font-bold text-gray-700'>Simulated Interview Environment</p>
      </div>
      <div className="flex items-center mb-4">
        <SlGraduation className="mr-2 text-gray-500" style={{ fontSize: '24px', fontWeight: 'bold' }} />
        <p className='text-lg font-bold text-gray-700'>Interview Preparation Resources</p>
      </div>
      <div className="flex items-center">
        <SlGraduation className="mr-2 text-gray-500" style={{ fontSize: '24px', fontWeight: 'bold' }} />
        <p className='text-lg font-bold text-gray-700'>Book with Flexibility</p>
      </div>
    </div>
  );
};

export default Offers;