import React from 'react'
import "./welcome.css"
import Hospital from './hospital.PNG'

import { Link } from 'react-router-dom';

function Newlog() {
    return (
        <div className= "logIn">
         <div className="head">welcome back</div>
      <div className="ImgBox">
      <img src={Hospital} alt=" " height="900" width="700"/>
     </div>
      <div className="formDiv">
          <form>
              <input type="email" placeholder="Email" className="username1"/>
              <input type="password" placeholder="Password" required autoComplete ="off" className="username2"/>
             
              <button type="submit">
                  <Link to='/admin/showDetails'>Login</Link>
              </button>
              
              <button type="submit">
                  <Link to='/admin/registerDoctor'>Sign Up</Link>
              </button>

          </form>
      </div>
      </div>
    )
}

export default Newlog
