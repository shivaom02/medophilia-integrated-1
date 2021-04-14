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
 
 const authReducer = (state, { type, payload }) => {
   switch (type) {
     case CONFIRM_EMAIL:
       return {
         ...state,
         doctorAuth: null
       };
     case SUCCESS_REGISTER:
     case SUCCESS_LOGIN:
       localStorage.setItem('doctorToken', payload.token);
       return {
         ...state,
         doctorAuth:localStorage.getItem('doctorToken'),
         errors: null,
         doctor: payload.doctor
       };
     case FAIL_REGISTER:
     case FAIL_LOGIN:
     case AUTH_ERROR:
     case LOG_OUT:
       localStorage.removeItem('doctorToken');
       return {
         ...state,
         doctorAuth: null,
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
     case SET_DOCTOR:
       return {
         ...state,
         doctor: payload,
         errors: null
       };
     default:
       return state;
   }
 };
 
 export default authReducer;