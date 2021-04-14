import React from 'react'

import "./DoctorListDetails.css"

function DoctorListDetails() {
    return (
        <div className="DoctorListDetails">
            <div className="photo"></div>
            <div className="content">
                <p>name : <span>Dr. anita kumari</span></p>
                <p>Hospital Name : <span>guwahati medical college</span></p>
                <p>specialty : <span>dentist</span></p>
            </div>
        </div>
    )
}

export default DoctorListDetails