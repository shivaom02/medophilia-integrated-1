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
 
 const authReducer = (state, { type, payload }) => {
   switch (type) {
     case CONFIRM_EMAIL:
       return {
         ...state,
         adminAuth: null
       };
     case SUCCESS_REGISTER:
     case SUCCESS_LOGIN:
       localStorage.setItem('adminToken', payload.token);
       return {
         ...state,
         adminAuth:localStorage.getItem('adminToken'),
         errors: null,
         admin: payload.admin
       };
     case FAIL_REGISTER:
     case FAIL_LOGIN:
     case AUTH_ERROR:
     case LOG_OUT:
       localStorage.removeItem('adminToken');
       return {
         ...state,
         adminAuth: null,
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
     case SET_ADMIN:
       return {
         ...state,
         admin: payload,
         errors: null
       };
     default:
       return state;
   }
 };
 
 export default authReducer;