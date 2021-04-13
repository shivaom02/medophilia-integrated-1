import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import { setTokenSuperAdmin } from '../../utilsClient/setToken';

import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_REGISTER,
  FAIL_LOGIN,
  SET_ERROR,
  CLEAR_ERROR,
  LOG_OUT,
  AUTH_ERROR,
  SET_SUPER_ADMIN,
  CONFIRM_EMAIL
} from '../types';

const AuthState = (props) => {
  const initialState = { 
 
    userAuth : localStorage.getItem('userToken'),
    
    doctorAuth : localStorage.getItem('doctorToken'),
    
    pharmacyAuth : localStorage.getItem('pharmaToken'),
    
    hospitalAuth : localStorage.getItem('hospitalToken'),

    superAdminAuth : localStorage.getItem('superAdminToken'),
    
    errors: null,

    superAdmin: null
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

  const registerSuperAdmin = async superAdmin =>{
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }
     try {
       const res = await axios.post('/superAdmin/register',superAdmin,config)
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

  const loginSuperAdmin = async (loginData) => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/superAdmin/login', loginData, config);
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
  const getSuperAdmin = async () => {

    if (localStorage.superAdminToken) {
      
      setTokenSuperAdmin(localStorage.superAdminToken);
    }
    try {
      const res = await axios.get('/superAdmin/profile');

      dispatch({
        type: SET_SUPER_ADMIN,
        payload: res.data.superAdmin
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
        
        superAdmin: state.superAdmin,
        
        superAdminAuth: state.superAdminAuth,

        errors: state.errors,
        confirmMail,
        registerSuperAdmin,
        loginSuperAdmin,
        setError,
        error: state.error,
        log_out,
        clearError,
        getSuperAdmin
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;