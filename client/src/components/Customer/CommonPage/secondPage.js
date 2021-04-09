import React from "react";
import "./secondpage.css";

// import { Link } from 'react-router-dom';

const DetailsSec=()=>{
    return(
    <div className="SecondPage">
        <div className="precription_validation">
              <div>
              Emergency
              </div>
        </div>
        <div className="user">
             <div className="photo"></div>
             <div className="content">
                        <p>Dr Namita Das</p>
                        <p>26</p>
                </div>

        </div>
        <nav className="sections">
           
               <div>Medicine</div>
    
            <div>
                reminder
            </div>

        </nav>
    </div>
    )
}

export default DetailsSec;