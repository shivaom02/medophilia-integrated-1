import React from 'react'
import './register_doctor.css'

function register_doctor() {
    return (
        <div className="register">
           <div class="flex-container">
          <div class="flex-item-left">
              <div className="left_content">
                  <p className="content">Add admin</p>
                  <p className="content">register a doctor</p>
                  <p className="content">register a pharmacy</p>
                  <p className="content">Delete</p>
              </div>
          </div>
           <div class="flex-item-right">
               <div className="right_head">Register as a doctor</div>
               <div className="formDiv">

    <input type="text" id="lname"  placeholder="Your name.."/>

    <input type="text" id="lname" placeholder="Your last name.."/>

    <input type="email" id="lname"   placeholder="enter your email"/>

    <input type="password" id="lname"   placeholder="give passward"/>

    <input type="password" id="lname"   placeholder="re-enter password"/>

    <input type="text" id="lname"  placeholder="enter your medical name"/>

    <input type="submit" value="Submit"/>
               </div>
           </div>
          </div> 
        </div>
    )
}

export default register_doctor
