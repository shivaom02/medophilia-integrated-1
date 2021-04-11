import React from "react";
import banner from "../assets/banner.svg";

import { Link } from 'react-router-dom';

import "./Signup.css"

const Signup=()=>{
    return(
    <div className="cusRegistration">
        <div className="imgbox">
            <img src={banner} alt='Banner Pic' />
        </div>
        <form >
            <input className="input_second" placeholder="Name" />
            <input className="input_second" placeholder="Phone Number"/>
            <input className="input_second" placeholder="Email"/>
            <input className="input_second" placeholder="Password"/>
            <input className="input_second" placeholder="Re-Enter Password"/>
            <div className="controls">
                <div className="checking">
                    <input type="checkbox" id="checkit" />
                    <label for="checkit" >Remember me</label>
                </div>
                   <button>
                      <Link to='/customer/details'>
                          Sign Up
                      </Link>
                   </button>
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
        
                   <button>
                      <Link to='/customer/details'>
                         Login using Google
                      </Link>
                   </button>
             
            </div>
        </form>

    </div>)
}

export default Signup;