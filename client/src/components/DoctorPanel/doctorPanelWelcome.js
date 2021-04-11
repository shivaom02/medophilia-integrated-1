import React, { useState } from 'react'
import "./doctorPanelWelcome.css"
import Hospital from '../Welcome/hospital.PNG'
import axios from "axios";

import { Link,useHistory } from 'react-router-dom';

function Newlog() {
    const history=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const SignInDoc=()=>{

    }
    return (
        <div className= "DoctorlogIn">
         <div className="head">DOCTOR NAME</div>
      <div className="ImgBox">
      <img src={Hospital} alt=" " height="800" width="700"/>
     </div>
      <div className="formDiv">
          <form>
              <input type="email" placeholder="Enter patients name" className="username1"/>
               <p>OR</p>
              <input type="password" placeholder="Enter patients Id" required autoComplete ="on" className="username2"/>
              
              {/* /doctor/patient */}
              <button type="submit">
                      Enter
              </button>
          </form>
      </div>
      </div>
    )
}

export default Newlog
