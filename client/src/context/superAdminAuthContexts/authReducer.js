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
 
 const authReducer = (state, { type, payload }) => {
   switch (type) {
     case CONFIRM_EMAIL:
       return {
         ...state,
         superAdminAuth: null
       };
     case SUCCESS_REGISTER:
     case SUCCESS_LOGIN:
       localStorage.setItem('superAdminToken', payload.token);
       return {
         ...state,
         superAdminAuth:localStorage.getItem('superAdminToken'),
         errors: null,
         superAdmin: payload.superAdmin
       };
     case FAIL_REGISTER:
     case FAIL_LOGIN:
     case AUTH_ERROR:
     case LOG_OUT:
       localStorage.removeItem('superAdminToken');
       return {
         ...state,
         superAdminAuth: null,
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
     case SET_SUPER_ADMIN:
       return {
         ...state,
         superAdmin: payload,
         erros: null
       };
     default:
       return state;
   }
 };
 
 export default authReducer;