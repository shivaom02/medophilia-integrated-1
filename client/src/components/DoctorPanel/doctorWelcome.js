import React,{useState} from 'react'
import "../Welcome/welcome.css"
import Hospital from '../Welcome/hospital.PNG'
import axios from "axios";
import { Link ,useHistory} from 'react-router-dom';

function Newlog() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();
    const DocLogin=async (e)=>{
        try{
            e.preventDefault();
           const result= await axios.post(`${window.location.protocol}//${window.location.hostname}/5000/doc/login`,{email,password})
           if(result.data.success==0){
               return alert("login error");
           }
           history.push("/doctor/welcome")
            
        }catch(e){
            console.log(e);
        }
    }
    return (
        <div className= "logIn">
         <div className="head">welcome back</div>
      <div className="ImgBox">
      <img src={Hospital} alt=" " height="900" width="700"/>
     </div>
      <div className="formDiv">
          <form>
              <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" className="username1"/>
              <input  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" required autoComplete ="off" className="username2"/>
             
             {/* /doctor/welcome */}
              <button type="submit" onClick={(e)=>{DocLogin(e)}}>
                  Login
              </button>
              
          </form>
      </div>
      </div>
    )
}

export default Newlog
