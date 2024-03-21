import { createContext, useEffect, useReducer } from "react";

 const initial_state = {
     user: localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null,
     loading: false,
    error: null,
 };


export const AuthContext = createContext(initial_state)

const AuthReducer = (state,action) =>{
    switch(action.type){
        case 'LOGIN_START' :
            return {
                user: null,
                loading:false,
                error:null,

            };
            case 'LOGIN_SUCCESS' :
                return{
                    user: action.payload.user,
                    token:action.payload.token,
                    loading:false,
                    error:null


                }

                case 'LOGIN_FAILURE' :
                return{
                    user: null,
                    loading:false,
                    error:action.payload,

                }
                case 'REGISTER_SUCCESS' :
                return{
                    user: null,
                    loading:false,
                    error:null,

                }
                case 'LOGOUT' :
                return{
                    user: null,
                    loading:false,
                    error:null,

                }
                case 'UPDATE_USER_DETAILS':
                return {
                    ...state,
                    user: action.payload // Assuming action.payload contains updated user details
                };


            default:
                return state
    }
};

export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,initial_state)

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user])

    useEffect(()=>{
        localStorage.setItem('token',JSON.stringify(state.token))
    },[state.user])
    

    const updateUserDetails = (updatedDetails) => {
        dispatch({ type: 'UPDATE_USER_DETAILS', payload: updatedDetails });
      };

    return <AuthContext.Provider value={{
        user:state.user,
        loading:state.loading,
        error:state.error,
        dispatch,
        updateUserDetails 
    }}>
        {children}
    </AuthContext.Provider>
    };
