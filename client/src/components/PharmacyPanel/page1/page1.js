import React from "react";
import banner from "../../assets/banner.svg";

import { Link } from 'react-router-dom';

import "./page1.css"
const Registration=()=>{
    return(
    <div className="registration">
        <div className="imgbox">
            <img src={banner} alt='Banner Pic' />
        </div>
        <form >
            <input className="input_first" placeholder="Username / Email" />
            <input className="input_first" placeholder="User password"/>
            <div className="controls">
                <div className="checking">
                    <input type="checkbox" id="checkit" />
                    <label for="checkit" >Remember me</label>
                </div>
                <Link to='/page2'>
                   <button>
                      Sign In
                   </button>
                </Link>
            </div>
            <div className="dividor">
                <div className="border_div">

                </div>
                <div className="div_or">
                    <h5>Or</h5>
                </div>
                <div className="border_div">

                </div>
            </div>
            <div className="options">
                <Link to='/page2'>
                   <button>
                      Login using Google
                   </button>
                </Link>
            </div>
        </form>

    </div>)
}

export default Registration;