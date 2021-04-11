import React from 'react'

import { Link } from 'react-router-dom';

import '../registers/register_doctor.css'

const Admin_sign_up = () => {
    return (
        <div className="register">
        <div class="flex-container">

        <div class="flex-item-right">
            <div className="right_head">Add Admin</div>
            <div className="formDiv">

            <input type="text" id="lname"  placeholder="Your name.."/>

            <input type="email" id="lname"   placeholder="enter your email"/>

            <input type="password" id="lname"   placeholder="give password"/>

            <input type="password" id="lname"   placeholder="re-enter password"/>

            <input type="text" id="lname"  placeholder="Registration Id"/>

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

export default Admin_sign_up
