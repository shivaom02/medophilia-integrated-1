import React,{useState} from "react";
import banner from "../../assets/banner.svg";
import axios from "axios";
import { Link ,useHistory} from 'react-router-dom';

import "./page1.css"
const RegisterPharma= async()=>{
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const Login=async(e)=> {
        e.preventDefault();
        const history=useHistory();
        try{
            const result= await axios.post(`${window.location.protocol}//${window.location.hostname}/5000/doc/login`,{email,password})
            if(result.data.success==0){
                return alert("Unable to signin");
            }

            history.push("/page2");
            
        }
        catch(e){
            alert(e)
        }

    }
    return(
    <div className="registration">
        <div className="imgbox">
            <img src={banner} alt='Banner Pic' />
        </div>
        <form >
            <input onChange={(e)=>{setEmail(e.target.value)}} className="input_first" placeholder="Username / Email" />
            <input onChange={(e)=>{setPassword(e.target.value)}} className="input_first" placeholder="User password"/>
            <div className="controls">
                <div className="checking">
                    <input type="checkbox" id="checkit" />
                    <label for="checkit" >Remember me</label>
                </div>
                {/* /page2 */}
                   <button onClick={(e)=>{Login(e)}}>
                      Sign In
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
                      Login using Google
                   </button>
                
            </div>
        </form>

    </div>)
}

export default RegisterPharma;