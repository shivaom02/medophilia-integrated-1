import React,{useState,useEffect,useContext} from 'react'
import './register_doctor.css'
import { Link,useHistory } from 'react-router-dom';
import AxiosInstance from "../../utilsClient/AxiosInstance";
import {toast,ToastContainer} from "react-toastify";
import adminAuthContexts from "../../context/adminAuthContexts/authContext";


const Register_doctor = () => {
            
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [checkPassword,setCheckPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [speciality,setSpeciality]=useState("");
    const [address,setAddress]=useState("");
    const [about,setAbout]=useState("");
    const [license,setLicense]=useState("");
    const [hospital,setHospital]=useState("");
    const [status,setStatus]=useState(false);
    const history=useHistory();
     const {log_out} = useContext(adminAuthContexts)
    const notify=(message)=>toast(message);

    const RegisterDoctor=async()=>{

        
        
        
        try{
            if(password!==checkPassword){
                setStatus(false)
                return notify("wrong password");
            }
            const data={
                name,
                email,
                phone,
                speciality,
                address,
                password,
                license,
                hospital,
            }
            
            const token = localStorage.adminToken;
            console.log(token);
            const config={
                headers:{
                    "AuthorizationAdmin":`Bearer${token}`
                }
            };
            const result =await AxiosInstance.post(`/doc/register`,data,config);
            
            console.log(result);
            if(result.data.success==0){
                setStatus(false)
                return notify("Unable to register");
            }
            
            
            setStatus(true)
            notify("Registered successfully");
            setTimeout(()=>{
                history.push("/admin/showDetails");
            },[3000])
        }
        catch(e){
            console.log(e);
        }
    }

    const Logout = async(e)=>{
        e.preventDefault();
            log_out();
            console.log(localStorage.getItem("adminToken"));
            if(localStorage.getItem("adminToken")==undefined){
                setStatus(true)
                notify("Logout successfully");
            }

            setStatus(false)
            notify("Unable to logout");
                
        
    
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
               <div className="right_head">Register as a doctor</div>
               <div className="formDiv">

               <input onChange={(e)=>{setName(e.target.value)}} type="text" id="lname"  placeholder="Your name.."/>

               <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="lname"   placeholder="enter your email"/>

               <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id="lname"   placeholder="give password"/>

               <input onChange={(e)=>{setCheckPassword(e.target.value)}} type="password" id="lname"   placeholder="re-enter password"/>

               <input onChange={(e)=>{setHospital(e.target.value)}} type="text" id="lname"  placeholder="enter your medical name"/>

               <input onChange={(e)=>{setSpeciality(e.target.value)}} type="text" id="lname"  placeholder="Speciality"/>

               <input onChange={(e)=>{setAddress(e.target.value)}} type="text" id="lname" placeholder="Address"/>

               

               <input onChange={(e)=>{setLicense(e.target.value)}} type="text" id="lname" placeholder="License"/>

{/* /admin/showDetails */}
               <button type="submit" onClick={(e)=>{RegisterDoctor(e)}}>
                   
                       Submit
               </button>
               
               </div>
           </div>
          </div> 
        </div>
    )
}

export default Register_doctor
