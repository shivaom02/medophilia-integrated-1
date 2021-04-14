import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { setTokenUser } from '../../utilsClient/setToken';

import AxiosInstance from '../../utilsClient/AxiosInstance';

import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_REGISTER,
  FAIL_LOGIN,
  SET_ERROR,
  CLEAR_ERROR,
  LOG_OUT,
  AUTH_ERROR,
  SET_USER,
  CONFIRM_EMAIL
} from '../types';

const AuthState = (props) => {
  const initialState = { 

    userAuth : localStorage.getItem('userToken'),
    
    errors: null,

    user: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // confirm mail
  const confirmMail = async (teacher) => {
    // try {
    //   const token = await axios.post('/teacher/', teacher);
    //   dispatch({
    //     type: CONFIRM_EMAIL,
    //     payload: token
    //   });
    // } catch (error) {
    //   dispatch({
    //     type: FAIL_REGISTER,
    //     payload: error.response.data
    //   });
    // }
  };

  //register teacher

  const registerUser = async user =>{
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }
       const res = await AxiosInstance.post('/user/register',user,config);

       console.log(res);

       if(res.data.success==0){

        dispatch({
         
          type:FAIL_REGISTER,
         
          payload:'Unable to Create Account'
       
        })
      }  else{
        
        dispatch({
        
          type:SUCCESS_REGISTER,
          payload:res.data
       })
       } 
  }

  //login teacher

  const loginUser = async (loginData) => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };
      const res = await AxiosInstance.post('/user/login', loginData, config);
     
      console.log(res);

       if(res.data.success==0){

        dispatch({
         
          type:FAIL_LOGIN,
         
          payload:'Unable to Login'
       
        })
      }  else{
        
        dispatch({
        
          type:SUCCESS_LOGIN,
          payload:res.data
       })
       } 
  };

  //log_out
  const log_out = () => {
    dispatch({
      type: LOG_OUT
    });
  };
  //get teacher
  const getUser = async () => {

    if (localStorage.userToken) {
      
      setTokenUser(localStorage.userToken);
    }
    try {
      const res = await AxiosInstance.get('/user/profile');

      console.log(res.data.data);

      dispatch({
        type: SET_USER,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data
      });
    }
  };
  const setError = (err) => {
    dispatch({
      type: SET_ERROR,
      payload: { msg: err }
    });
  };
  const clearError = () => {
    dispatch({
      type: CLEAR_ERROR
    });
  };

  return (
    <AuthContext.Provider
      value={{
        
        user: state.user,

        userAuth: state.userAuth,

        errors: state.errors,

        confirmMail,
        registerUser,
        loginUser,
        setError,
        log_out,
        clearError,
        getUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;