import React from "react";
import banner from "../assets/banner.svg";

import { Link } from 'react-router-dom';

import "./signIn.css"

const Registration=()=>{
    return (
      <div className='cusRegistration'>
        <div className='imgbox'>
          <img src={banner} alt='Banner Pic' />
        </div>
        <form>
          <input className='input_first' placeholder='Username / Email' />
          <input className='input_first' placeholder='User password' />
          <div className='controls'>
            <div className='checking'>
              <input type='checkbox' id='checkit' />
              <label for='checkit'>Remember me</label>
            </div>
            <button>
              <Link to='/customer/details'>Sign In</Link>
            </button>
          </div>
          <div className='dividor'>
            <div className='border_div'></div>
            <div className='div_or'>
              <h5>Or</h5>
            </div>
            <div className='border_div'></div>
          </div>
          <div className='options'>
            <button>
              <Link to='/cutomer_signup'>Sign Up?</Link>
            </button>
          </div>
        </form>
      </div>
    );
}

export default Registration;