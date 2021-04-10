import React from 'react'
import './register_doctor.css'

import { Link } from 'react-router-dom';

function register_doctor() {
    return (
        <div className="register">
           <div class="flex-container">
          <div class="flex-item-left">
              <div className="left_content">
                  <p className="content">Add admin</p>
                  <p className="content">
                  
                  <Link to='/admin/registerDoctor'>register a doctor</Link>
               
                  </p>
                
                  <p className="content">
                  
                    <Link to='/admin/registerPharmacy'>register a pharmacy</Link>
                  </p>
                  <p className="content">Delete</p>
                  </div>
          </div>
           <div class="flex-item-right">
               <div className="right_head">Register as a pharmacy</div>
               <div className="formDiv">

               <input type="text" id="lname"  placeholder="Your name.."/>

               <input type="text" id="lname" placeholder="Your last name.."/>

               <input type="email" id="lname"   placeholder="enter your email"/>

               <input type="password" id="lname"   placeholder="give password"/>

               <input type="password" id="lname"   placeholder="re-enter password"/>

               <input type="text" id="lname"  placeholder="enter your medical name"/>

               <button type="submit">
                   <Link to='/admin/showDetails'>
                       Submit
                   </Link>
               </button>
               
               </div>
           </div>
          </div> 
        </div>
    )
}

export default register_doctor
