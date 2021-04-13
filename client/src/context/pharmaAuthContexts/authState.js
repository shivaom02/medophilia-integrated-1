import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import { setTokenPharma } from '../../utilsClient/setToken';

import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_REGISTER,
  FAIL_LOGIN,
  SET_ERROR,
  CLEAR_ERROR,
  LOG_OUT,
  AUTH_ERROR,
  SET_PHARMA,
  CONFIRM_EMAIL
} from '../types';

const AuthState = (props) => {
  const initialState = { 
    
    pharmacyAuth : localStorage.getItem('pharmaToken'),

    errors: null,

    pharmacyAuth: null
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

  const registerPharma = async pharma =>{
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }
     try {
       const res = await axios.post('/pharma/register',pharma,config)
       dispatch({
         type:SUCCESS_REGISTER,
         payload:res.data
       })
     } catch (error) {
       dispatch({
         type:FAIL_REGISTER,
         payload:error.response.data
       })
     }
  }

  //login teacher

  const loginPharma = async (loginData) => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/pharma/login', loginData, config);
      dispatch({
        type: SUCCESS_LOGIN,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: FAIL_LOGIN,
        payload: error.response.data
      });
    }
  };

  //log_out
  const log_out = () => {
    dispatch({
      type: LOG_OUT
    });
  };
  //get teacher
  const getPharma = async () => {

    if (localStorage.pharmaToken) {
      
      setTokenPharma(localStorage.pharmaToken);
    }
    try {
      const res = await axios.get('/pharma/profile');

      dispatch({
        type: SET_PHARMA,
        payload: res.data.pharma
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
        
        pharma : state.pharma,
        
        pharmacyAuth: state.pharmacyAuth,

        errors: state.errors,
        confirmMail,
        registerPharma,
        loginPharma,
        setError,
        error: state.error,
        log_out,
        clearError,
        getPharma
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;