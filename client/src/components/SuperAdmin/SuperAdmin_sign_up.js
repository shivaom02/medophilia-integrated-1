import React from 'react'

import '../registers/register_doctor.css'

const SuperAdmin_sign_up = () => {

    return (
        <div className="register">
        <div class="flex-container">

        <div class="flex-item-right">
            <div className="right_head">Register SuperAdmin</div>
            <div className="formDiv">

            <input  type="text" id="lname"  placeholder="Your name.."/>

            <input  type="email" id="lname"   placeholder="enter your email"/>

            <input  type="password" id="lname"   placeholder="give password"/>

            <input  type="password" id="lname"   placeholder="re-enter password"/>

            <input  type="text" id="lname"  placeholder="Registration Id"/>

            <input type="number" id="lname"  placeholder="Phone Number"/>

{/* admin/showDetails */}
            <button type="submit">
                
                    Submit
                
            </button>
            
            </div>
        </div>
       </div> 
     </div>
    )
}

export default SuperAdmin_sign_up;
