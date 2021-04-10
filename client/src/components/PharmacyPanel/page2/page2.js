import React from "react";
import banner from "../../assets/banner.svg";

import "./page2.css"

import { Link } from 'react-router-dom';

const ScaneOr=()=>{
    return(
    <div className="registration">
        <div className="imgbox">
            <img src={banner} alt='Banner Pic' />
        </div>
        <div className="title">
            <h2>Ratna Pharmacy</h2>
        </div>
        <div className="enter_options">
            <button>
                Scan New
            </button>
            <Link to='/index'>
              <button>
                View Purchase
              </button>
            </Link>
            
        </div>
        <div className="buttonlogout">
            <button className="logoutnow">
                Logout
            </button>
        </div>
    </div>)
}

export default ScaneOr;