import React,{useState} from "react";
import banner from "../assets/banner.svg";
import axios from "axios"
import { Link ,useHistory} from 'react-router-dom';

import "./Signup.css"

const Signup=()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [checkPassword,setCheckPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const history=useHistory();
    const CutomerSignUp= async(e)=>{
        e.preventDefault();
        try{
            const data={
                name,
                password,
                checkPassword,
                phone,
                email
            };
            if(checkPassword!=password){
               return alert("password does not match");
            }
            const result=await  axios.post("http://localhost:5000/cutomer/",data);
            if(result.data.success==0){
                return alert("unable to login")
            }
            history.push("/")
        }
        catch(e){
            console.log(e);
        }

    }
    return(
    <div className="cusRegistration">
        <div className="imgbox">
            <img src={banner} alt='Banner Pic' />
        </div>
        <form >
            <input  onChange={(e)=>{setName(e.target.value)}}  className="input_second" placeholder="Name" />
            <input onChange={(e)=>{setPhone(e.target.value)}} className="input_second" placeholder="Phone Number"/>
            <input  onChange={(e)=>{setEmail(e.target.value)}} className="input_second" placeholder="Email"/>
            <input  onChange={(e)=>{setPassword(e.target.value)}} className="input_second" placeholder="Password"/>
            <input onChange={(e)=>{setCheckPassword(e.target.value)}} className="input_second" placeholder="Re-Enter Password"/>
            
            <div className="controls">
                <div className="checking">
                    <input type="checkbox" id="checkit" />
                    <label for="checkit" >Remember me</label>
                </div>
                   <button onClick={(e)=>{CutomerSignUp(e)}}>
                      
                          Sign Up
                      
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
        {/* '/customer/details' */}
                   <button >
                      
                         SignUp using Google
                      
                   </button>
             
            </div>
        </form>

    </div>)
}

export default Signup;