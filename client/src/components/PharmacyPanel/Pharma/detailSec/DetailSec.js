import React from "react";
import "./Details.css";
import img from "../../../assets/banner.svg";
import {ReactComponent as Cart} from "../../../assets/shopping-cart.svg";

import { Link } from 'react-router-dom';

const DetailsSec=()=>{
    return(
    <div className="DetailsSec">
        <div className="doctor">
            <img  src={img}/>
            <div className="content">
                    <p>Dr Namita Das</p>
                    <p>Xyz Hospital</p>
                    <p>Detail 1</p>
            </div>
        </div>
        <div className="precription_validation">
              <div>
              Valid Prescription
              </div>
        </div>
        <div className="user">
             <img src={img} />
             <div className="content">
                        <p>Dr Namita Das</p>
                        <p>Xyz Hospital</p>
                        <p>Detail 1</p>
                </div>
              <div className="icon">
                <Link to='/index/total'>

                   <Cart id="cart"/>
                 </Link>
               </div>

        </div>
        <nav className="sections">
            <Link to='/index' >
               <div>Medicine</div>
            </Link>
            <div>
              <Link to='/index/Test' >
                Tests
               </Link>
            </div>
            <Link to='/index/Notes' >
               <div>Clinical Notes</div>
            </Link>
        </nav>
    </div>)
}

export default DetailsSec;