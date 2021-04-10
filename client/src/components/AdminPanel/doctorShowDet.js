import React from 'react'
import './doctorShowDet.css';

import {Link} from 'react-router-dom';

function register_doctor() {
    return (
        <div className="docShowDat">
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
               <p>Doctor registered</p>
               <p>Pharmacy registered</p>
               <p>prescription scanned</p>
           </div>
          </div> 
        </div>
    )
}

export default register_doctor
