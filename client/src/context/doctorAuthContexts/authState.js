import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import { setTokenDoctor } from '../../utilsClient/setToken';

import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_REGISTER,
  FAIL_LOGIN,
  SET_ERROR,
  CLEAR_ERROR,
  LOG_OUT,
  AUTH_ERROR,
  SET_DOCTOR,
  CONFIRM_EMAIL
} from '../types';

const AuthState = (props) => {
  const initialState = { 
     
    doctorAuth : localStorage.getItem('doctorToken'),
    
    errors: null,

    doctor: null
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

  const registerDoctor = async doctor =>{
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }
     try {
       const res = await axios.post('/doc/register',doctor,config)
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

  const loginDoctor = async (loginData) => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/doctor/login', loginData, config);
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
  const getDoctor = async () => {

    if (localStorage.doctorToken) {
      
      setTokenDoctor(localStorage.doctorToken);
    }
    try {
      const res = await axios.get('/doctor/profile');

      dispatch({
        type: SET_DOCTOR,
        payload: res.data.doctor
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
        
        doctor: state.doctor,
        
        doctorAuth: state.doctorAuth,

        errors: state.errors,
        confirmMail,
        registerDoctor,
        loginDoctor,
        setError,
        error: state.error,
        log_out,
        clearError,
        getDoctor
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;