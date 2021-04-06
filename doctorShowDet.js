import React from 'react'
import './doctorShowDet.css'

function register_doctor() {
    return (
        <div className="docShowDat">
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
               <p>Doctor registered</p>
               <p>Pharmacy registered</p>
               <p>prescription scanned</p>
           </div>
          </div> 
        </div>
    )
}

export default register_doctor
