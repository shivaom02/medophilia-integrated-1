import React from "react";
import "./section1.css"

import { Link } from 'react-router-dom';

const Section1=()=>{
    return(
    <div className="Section1">

<div className="colsection">
             <div className="first">
               <Link to='/index/Addto' >
                 20
                </Link>
             </div>
             <div className="sec">
            
                <Link to='/index/Addto' >

                 <p>Nimosolide</p>
                 <p>To be taken <span>2 Times</span> A day</p>
                 <p>For 10 days</p>

                 </Link>
             </div>
             <div className="third">
                <Link to='/index/Addto' >

                12
                </Link>
             </div>
          </div>
        
          <div className="colsection">
             <div className="first">
               <Link to='/index/Addto' >
                 20
                </Link>
             </div>
             <div className="sec">
            
                <Link to='/index/Addto' >

                 <p>Nimosolide</p>
                 <p>To be taken <span>2 Times</span> A day</p>
                 <p>For 10 days</p>

                 </Link>
             </div>
             <div className="third">
                <Link to='/index/Addto' >

                12
                </Link>
             </div>
          </div>
    </div>)
}

export default Section1;