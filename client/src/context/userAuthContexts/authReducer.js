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
 
 const authReducer = (state, { type, payload }) => {
   switch (type) {
     case CONFIRM_EMAIL:
       return {
         ...state,
         userAuth: null
       };
     case SUCCESS_REGISTER:
     case SUCCESS_LOGIN:
       localStorage.setItem('userToken', payload.token);
       return {
         ...state,
         userAuth:localStorage.getItem('userToken'),
         errors: null,
         user: payload.user
       };
     case FAIL_REGISTER:
     case FAIL_LOGIN:
     case AUTH_ERROR:
     case LOG_OUT:
       localStorage.removeItem('userToken');
       return {
         ...state,
         userAuth: null,
         errors: payload
       };
     case SET_ERROR:
       return {
         ...state,
         errors: payload
       };
     case CLEAR_ERROR:
       return {
         ...state,
         errors: null
       };
     case SET_USER:
       return {
         ...state,
         user: payload,
         errors: null
       };
     default:
       return state;
   }
 };
 
 export default authReducer;