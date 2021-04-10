import React from 'react'
import './Patient_name.css'
import Hospital from '../Welcome/hospital.PNG'
function Patient_name() {
    return (
        <div>
            <div className="grid-container">
  <div className="item1">
      <span className="dp_photo">
      <img src={Hospital} alt=" " height="150" width="150"/>
      </span>
      <p>Name:</p>
      <p>age :</p>
      <p> sex:</p>
      <p>address:</p>
  </div>
  <div className="item3"> 
  <p className="text">COMPLAINT :</p>
  <p className="details"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </p>
 </p> </div>  
  <div className="item4">
      <p className="date">DATE : XX XX XXXX</p>
  </div>
  <div className="item5">
      <button className="button1">view history</button>
      <button className="button2">prescription</button>
  </div>
</div>
        </div>
    )
}

export default Patient_name
