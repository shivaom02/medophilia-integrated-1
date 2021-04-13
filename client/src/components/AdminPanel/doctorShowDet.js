import React,{useEffect, useState} from 'react'
import './doctorShowDet.css';

import {Link,useHistory} from 'react-router-dom';

function Register_doctor() {
    const [token,setToken]=useState(localStorage.getItem("AdminToken"));
    const history=useHistory();
  
    useEffect(() => {
  
        // setToken(localStorage.getItem("AdminToken"));
        
        // if(token==undefined){
        //     history.push("/");
        // }
        
    }, [token])
    return (
        <div className="docShowDat">
           <div class="flex-container">
          <div class="flex-item-left">
              <div className="left_content">
                  
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

export default Register_doctor
