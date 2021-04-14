import React,{useState,useEffect,useContext} from 'react'
import './register_doctor.css'
import { Link ,useHistory} from 'react-router-dom';
import AxiosInstance from "../../utilsClient/AxiosInstance";
import {toast,ToastContainer} from "react-toastify";
import adminAuthContexts from "../../context/adminAuthContexts/authContext";
import axios from "axios";

function Pharma_doctor() {
    const history=useHistory();

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    const [checkPassword,setCheckPassword]=useState("");
    const [licence,setLicence]=useState("");
    const [status,setStatus]=useState(false);
    const notify=(message)=>toast(message);
    const Register= async(e)=>{

        e.preventDefault();
        if(checkPassword!==password){
            setStatus(false)
            return notify("password does not match");
        }
        const token = localStorage.adminToken;
        console.log(token,"from local");
        const data={name,email,address,phone,password,licence}
        // axios.create({

            
            
            
        // })
        console.log(token);
        try{
            const config={
                headers:{
                    "AuthorizationAdmin":`${token}`
                },
            }
            const result =await AxiosInstance.post(`/pharma/register`,data,config);
            console.log(result);
            if(result.data.success==0){
                setStatus(false)
                return notify("Unable to register pharma");
            }
            setStatus(true);
            notify("registered successfully");
            setTimeout(()=>{
                history.push("/admin/showDetails");
            },3000);

        }
        catch (e){
            console.log(e);
        }

    }

    const Logout=()=>{

    }
    return (
        <div className="register">
            {status?<ToastContainer
                hideProgressBar={true}
                autoClose={4000}
                bodyClassName={"success_message"}
                />:<ToastContainer
                hideProgressBar={true}
                autoClose={4000}
                bodyClassName={"error_message"}
                />}
           <div class="flex-container">
          <div class="flex-item-left">
              <div className="left_content">
    
                  <p className="content">
                  
                  <Link to='/admin/registerDoctor'>register a doctor</Link>
               
                  </p>
                
                  <p className="content">
                  
                    <Link to='/admin/registerPharmacy'>register a pharmacy</Link>
                  </p>
                  <p className="content">Delete</p>
                  <p className="content" onClick={(e)=>{Logout(e)}}>
                    Logout
                  </p>
                  </div>
          </div>
           <div class="flex-item-right">
               <div className="right_head">Register as a pharmacy</div>
               <div className="formDiv">

               <input onChange={(e)=>{setName(e.target.value)}} type="text" id="lname"  placeholder="Your name.."/>

               <input onChange={(e)=>{setPhone(e.target.value)}}  type="number" id="lname" placeholder="phone no"/>

               <input onChange={(e)=>{setEmail(e.target.value)}}  type="email" id="lname"   placeholder="enter your email"/>

               <input onChange={(e)=>{setAddress(e.target.value)}}  type="text" id="lname"   placeholder="address"/>

               <input onChange={(e)=>{setLicence(e.target.value)}}  type="text" id="lname"   placeholder="Licence"/>

               <input onChange={(e)=>{setPassword(e.target.value)}}  type="password" id="lname"   placeholder="give password"/>


               <input onChange={(e)=>{setCheckPassword(e.target.value)}}  type="password" id="lname"   placeholder="re-enter password"/>

               <input type="text" id="lname"  placeholder="enter your medical name"/>

{/* admin/showDetails */}
               <button type="submit" onClick={(e)=>{Register(e)}}>
                   
                       Submit
                   
               </button>
               
               </div>
           </div>
          </div> 
        </div>
    )
}

export default Pharma_doctor
