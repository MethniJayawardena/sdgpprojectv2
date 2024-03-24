import React, { useState } from 'react';
import PaymentPortal from './PaymentPortal'; // Adjust the path as per your file structure
import Single from '../images/standered.png';
import Double from '../images/student.png';
import Triple from '../images/lite.png';

const Subscription = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleStartTrial = () => {
    setShowPaymentForm(true);
  };

  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-60 h-18 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Includes all Resources</h2>
          <p className='text-center text-4xl font-bold'>$20</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'> Coding Questionnaire</p>
            <p className='py-2 border-b mx-8'>Interview Demo </p>
            <p className='py-2 border-b mx-8'>Preparation Resources</p>
          </div>
          <button onClick={handleStartTrial} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Plan</button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-60 h-18 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Includes all Resources </h2>
          <p className='text-center text-4xl font-bold'>$10 </p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Coding Questionnaire</p>
            <p className='py-2 border-b mx-8'>Interview Demo</p>
            <p className='py-2 border-b mx-8'>Preparation Resources</p>
          </div>
          <button onClick={handleStartTrial} className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Plan</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-60 h-18 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Half Board</h2>
          <p className='text-center text-4xl font-bold'>$7.99 </p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Coding Questionnaire (Or) </p>
            <p className='py-2 border-b mx-8'> Interview Demo </p>
            <p className='py-2 border-b mx-8'>Preparation Resources</p>
          </div>
          <button onClick={handleStartTrial} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Plan</button>
        </div>
      </div>

      {/* Payment form */}
      {showPaymentForm && <PaymentPortal />}
    </div>
  );
};

export default Subscription;
