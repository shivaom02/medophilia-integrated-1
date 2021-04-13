import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';

import { setTokenAdmin } from '../../utilsClient/setToken';

import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_REGISTER,
  FAIL_LOGIN,
  SET_ERROR,
  CLEAR_ERROR,
  LOG_OUT,
  AUTH_ERROR,
  SET_ADMIN,
  CONFIRM_EMAIL
} from '../types';

const AuthState = (props) => {
  const initialState = { 
    
    adminAuth : localStorage.getItem('adminToken'),
    
    errors: null,

    admin: null
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

  const registerAdmin = async admin =>{
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }
     try {
       const res = await axios.post('/admin/register',admin,config)
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

  const loginAdmin = async (loginData) => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/admin/log_in', loginData, config);
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
  const getAdmin = async () => {

    if (localStorage.adminToken) {
      
      setTokenAdmin(localStorage.adminToken);
    }
    try {
      const res = await axios.get('/admin/profile');

      dispatch({
        type: SET_ADMIN,
        payload: res.data.admin
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
        
        admin: state.admin,

        errors: state.errors,
        confirmMail,
        registerAdmin,
        loginAdmin,
        setError,
        error: state.error,
        log_out,
        clearError,
        getAdmin
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;