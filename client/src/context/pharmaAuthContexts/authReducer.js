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
 
 const authReducer = (state, { type, payload }) => {
   switch (type) {
     case CONFIRM_EMAIL:
       return {
         ...state,
         pharmacyAuth: null
       };
     case SUCCESS_REGISTER:
     case SUCCESS_LOGIN:
       localStorage.setItem('pharmaToken', payload.token);
       return {
         ...state,
         pharmaAuth:localStorage.getItem('pharmaToken'),
         errors: null,
         pharma: payload.pharma
       };
     case FAIL_REGISTER:
     case FAIL_LOGIN:
     case AUTH_ERROR:
     case LOG_OUT:
       localStorage.removeItem('pharmaToken');
       return {
         ...state,
         pharmaAuth: null,
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
     case SET_PHARMA:
       return {
         ...state,
         pharma: payload,
         erros: null
       };
     default:
       return state;
   }
 };
 
 export default authReducer;