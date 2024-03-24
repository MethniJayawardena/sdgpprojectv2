import React, { useContext, useState ,useEffect} from 'react';
import { AuthContext } from './../context/AuthContext'; // Import the AuthContext
import { BASE_URL, token } from '../Utils/config';
import { Link, useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, updateUserDetails } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    fullName: user?.fullname || '',
    address: user?.address || '',
    age: user?.age || '',
    username: user?.username || '',
    email: user?.email || ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in, if not, redirect to login page
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`${BASE_URL}/users/update/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedUser)
      });
      
      if (res.ok) {
        const updatedUserData = await res.json();
        updateUserDetails(updatedUserData);
        setEditMode(false);
      } else {
        const errorData = await res.json();
        console.error('Error updating user details:', errorData.message);
        // Handle error response here
      }
    } catch (error) {
      console.error('Error updating user details:', error);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <div className='grid grid-cols-1 h-screen w-full'>
      <div className='bg-gray-100 flex flex-col justify-center'>
        <div className='max-w-[900px] w-full mx-auto bg-white p-8 mt-20 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <h2 className='text-4xl font-bold text-center mb-6'>INTERNOVA.</h2>
            {editMode ? (
              <>
                <div className='flex flex-col py-4'>
                  <label className='font-semibold'>Full Name:</label>
                  <input
                    type='text'
                    name='fullName'
                    value={updatedUser.fullName}
                    onChange={handleInputChange}
                    className='border-b border-gray-300 pb-2'
                  />
                </div>
                <div className='flex flex-col py-4'>
                  <label className='font-semibold'>Address:</label>
                  <input
                    type='text'
                    name='address'
                    value={updatedUser.address}
                    onChange={handleInputChange}
                    className='border-b border-gray-300 pb-2'
                  />
                </div>
                <div className='flex flex-col py-4'>
                  <label className='font-semibold'>Age:</label>
                  <input
                    type='text'
                    name='age'
                    value={updatedUser.age}
                    onChange={handleInputChange}
                    className='border-b border-gray-300 pb-2'
                  />
                </div>
                <div className='flex flex-col py-4'>
                  <label className='font-semibold'>Username:</label>
                  <input
                    type='text'
                    name='username'
                    value={updatedUser.username}
                    onChange={handleInputChange}
                    className='border-b border-gray-300 pb-2'
                  />
                </div>
                <div className='flex flex-col py-4'>
                  <label className='font-semibold'>Email:</label>
                  <input
                    type='email'
                    name='email'
                    value={updatedUser.email}
                    onChange={handleInputChange}
                    className='border-b border-gray-300 pb-2'
                  />
                </div>
                <div className='flex justify-center mt-4'>
                  <button
                    onClick={handleSave}
                    className='px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md'>
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
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
                  <button
                    onClick={() => setEditMode(true)}
                    className='px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md'>
                    Edit Details
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
