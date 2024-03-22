import React, { useContext, useState ,useEffect} from 'react';
import { AuthContext } from './../context/AuthContext'; // Import the AuthContext
import { BASE_URL, token } from '../Utils/config';
import { Link, useNavigate } from 'react-router-dom';

const Account = () => {
  const { user} = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in, if not, redirect to login page
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  //Account page content
  return (
    <div className='grid grid-cols-1 h-screen w-full'>
      <div className='bg-gray-100 flex flex-col justify-center'>
        <div className='max-w-[900px] w-full mx-auto bg-white p-8 mt-20 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <h2 className='text-4xl font-bold text-center mb-6'>INTERNOVA.</h2>
                <div className='flex flex-col py-4'>
                  <label className='font-semibold'>Full Name:</label>
                  <p className='border-b border-gray-300 pb-2'>{user?.fullname}</p>
                </div>
                <div className='flex flex-col py-4'>
                  <label className='font-semibold'>Address:</label>
                  <p className='border-b border-gray-300 pb-2'>{user?.address}</p>
                </div>
                <div className='flex flex-col py-4'>
                  <label className='font-semibold'>Age:</label>
                  <p className='border-b border-gray-300 pb-2'>{user?.age}</p>
                </div>
                <div className='flex flex-col py-4'>
                  <label className='font-semibold'>Username:</label>
                  <p className='border-b border-gray-300 pb-2'>{user?.username}</p>
                </div>
                <div className='flex flex-col py-4'>
                  <label className='font-semibold'>Email:</label>
                  <p className='border-b border-gray-300 pb-2'>{user?.email}</p>
                </div>
                <div className='flex justify-center mt-4'>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
