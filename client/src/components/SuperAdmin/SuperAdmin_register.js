import React from 'react';

import { Link } from 'react-router-dom';
import './superadmin_register.css';

const Register_SuperAdmin = () => {
  return (
    <div className='register'>
      <div class='flex-container'>
        <div class='flex-item-left'>
          <div className='left_content'>
            <p className='content'>
              <Link to='/admin/registerDoctor'>Register Admin</Link>
            </p>

            <p className='content'>
              <Link>Delete</Link>
            </p>
            <p className='content'>
              <Link>Logout</Link>
            </p>
          </div>
        </div>
        <div class='flex-item-right'>
          <div className='right_head'>Register an Admin</div>
          <div className='formDiv'>
            <input type='text' id='lname' placeholder='Admin name..' />
            <input type='email' id='lname' placeholder='Admin email' />
            <input type='password' id='lname' placeholder='Admin Password' />
            <input type='password' id='lname' placeholder='Re-enter password' />
            <input
              type='text'
              id='lname'
              placeholder="Enter Admin's medical name"
            />
            <textarea
              type='text'
              id='lname'
              rows="5"
              placeholder="Enter Admin's Description"
            ></textarea>
            {/* /admin/showDetails */}
            <button type='submit'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register_SuperAdmin;
