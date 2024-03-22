import React ,{useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom';

import loginImg from '../images/login (2).jpg'
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../Utils/config';

const Login = () => {

  // State for storing user credentials and error message
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined

    });

    const [error, setError] = useState('');

 // Context for authentication
    const {dispatch} = useContext (AuthContext)
// Hook for navigation
    const navigate = useNavigate()

      // Function to handle input change
    const handleChange = e => {
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    };

    // Function to handle login button click
    const handleClick = async e =>{
        e.preventDefault()

        dispatch ({type:'LOGIN_START'})// Dispatching action to indicate login start

        try {
          // Dispatching action to indicate login start
            const res =await fetch (`${BASE_URL}/auth/login`,{
                method:'post',
                headers:{
                    'content-type':'application/json',
                },
                credentials:'include',
                body:JSON.stringify(credentials),
            });

              // Handling response
            const result = await res.json();
    
    if (!res.ok) {
      // If response status is not ok, error message
      if (res.status === 401) {
        setError('Incorrect email or password. Please try again.');
      } else if (res.status === 404) {
        setError('User not found.');
      } else {
        setError('Failed to login. Please try again.');
      }
      return;
    }
 // Extracting token, user data, and role from response
    const { token, user, role } = result;

      // Dispatching action for successful login
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        user:result.data,
        token:result.token,
        role:result.role
      },
    });
        // Navigating to home page
    navigate('/');

   
        } catch (err) {
          // If error occurs, error message
            setError('Failed to login. Please try again.'); 

            dispatch({type:'LOGIN_FAILURE', payload:err.message});
            setCredentials({ email: '', password: '' });
            
        }
    };

  //login form
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form onSubmit={handleClick} className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>INTERNOVA.</h2>
                <div className='flex flex-col py-2'>
                    <label>Email</label>
                    <input type="email" className='border p-2' required id="email" onChange={handleChange}/>
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input type="password" className='border p-2' required id="password" onChange={handleChange}/>
                </div>
                 {/* Displaying error message */}
                {error && <p className="bg-red-100 text-red-900 text-sm px-4 py-2 mb-4 rounded-md">{error}</p>}

                <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Login</button>
                <div className='flex justify-between'>
                <p>Don't have an account? <Link to ='/register' className='ml-2 text-indigo-600 font-bold'>Create</Link></p>

                </div>
            </form>
        </div>
    </div>
  )
};
export default  Login;