import React ,{useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom';

import loginImg from '../images/login (2).jpg'
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../Utils/config';

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined

    });

    const [error, setError] = useState('');

    const {dispatch} = useContext (AuthContext)
    const navigate = useNavigate()

    const handleChange = e => {
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    };

    const handleClick = async e =>{
        e.preventDefault()

        dispatch ({type:'LOGIN_START'})

        try {

            const res =await fetch (`${BASE_URL}/auth/login`,{
                method:'post',
                headers:{
                    'content-type':'application/json',
                },
                credentials:'include',
                body:JSON.stringify(credentials),
            });

            const result = await res.json()
            if (!res.ok) {
                setError(result.message); // Set error message if login fails
                setCredentials({email:'', password:''});
            }

            // console.log(result.data);
            if (res.ok) {
                dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
                navigate('/');

            }
      

            // dispatch({type:'LOGIN_SUCCESS', payload:result.data});
            
            
        } catch (err) {
            setError('Failed to login. Please try again.'); // Set generic error message

            dispatch({type:'LOGIN_FAILURE', payload:err.message});
            setCredentials({ email: '', password: '' });
            
        }
    };

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