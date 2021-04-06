import React from 'react'
import "./doctorPanelWelcome.css"
import Hospital from './hospital.PNG'

function Newlog() {
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
              <button type="submit">Log In</button>
          </form>
      </div>
      </div>
    )
}

export default Newlog
