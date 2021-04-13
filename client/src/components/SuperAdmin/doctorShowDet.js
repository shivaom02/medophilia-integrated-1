import React,{useEffect, useState} from 'react'
import './doctorShowDet.css';

import {Link,useHistory} from 'react-router-dom';

function Register_doctor() {
    return (
        <div className="docShowDat">
           <div class="flex-container">
          <div class="flex-item-left">
              <div className="left_content">
                  
                  <p className="content">
                  
                     <Link to='/admin/registerAdmin'>Register an Admin</Link>
                  
                   </p>
                  <p className="content">
                  
                     <Link to='/admin/registerDoctor'>Register a doctor</Link>
                  
                   </p>
                   
                  <p className="content">
                      <Link to='/admin/registerPharmacy'>Register a pharmacy</Link>
                  </p>
                  
                  <p className="content">Delete</p>
              </div>
          </div>
           <div class="flex-item-right">
               <p>Admin registered</p>
               <p>Doctor registered</p>
               <p>Pharmacy registered</p>
               <p>prescription scanned</p>
           </div>
          </div> 
        </div>
    )
}

export default Register_doctor
