import React from 'react';

import './superadmin_login.css'


import Hospital from '../AdminPanel/hospital.PNG';
import SurX from '../assets/banner.svg';

const Login_SuperAdmin = () => {

  return (
    <div className='SuperAdminlogIn'>
      <div className='logo-container'>
        <img src={SurX} alt=""/>
      </div>
      <div className='head'>Welcome SuperAdmin</div>
      <div className='ImgBox'>
        <img src={Hospital} alt=' ' height='900' width='700' />
      </div>
      <div className='formDiv'>
        <form>
          <input
            type='email'
            placeholder='Email'
            className='username1'
          />
          <input
            type='password'
            placeholder='Password'
            required
            autoComplete='off'
            className='username2'
          />

          {/* /admin/showDetails */}
          <button
            type='submit'
          >
            logIn
          </button>

          {/* admin/registerDoctor */}
          {/* <button type="submit">
            <Link to="/admin/registerDoctor">Sign Up</Link>
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default Login_SuperAdmin;
