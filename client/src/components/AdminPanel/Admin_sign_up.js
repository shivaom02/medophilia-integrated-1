import React,{useEffect, useState} from 'react'
import { Link ,useHistory} from 'react-router-dom';
import axios from "axios";
import './register_doctor.css'
import  AxiosInstance from "../../utilsClient/AxiosInstance";
// toast 
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Admin_sign_up = () => {
    const history=useHistory();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPone]=useState("");
    const [CheckPassword,setCheckPassword]=useState("");
    const [registrationId,setRegistrationId]=useState("");
    
    const AdminLogin= async(e)=>{
        e.preventDefault();
        try{

            if(password!=CheckPassword){
                return alert("Password does not match");
            }
            const data={
                name,email,password,registrationId,phone
            }
            
            // const result =await axios.post(`${window.location.protocol}//${window.location.hostname}:5000/admin/register`,data);
            const result= await  AxiosInstance.post("/admin/register",data);
            
            console.log(result);
            if(result.data.success==0){
                return alert("Unable to login");

            }
            history.push("/admin/showDetails");
        }
        catch(e){
               alert(e); 
        }
    }
    toast=()=>{}
    return (
        
        <div className="register">
        <ToastContainer/>
        <div class="flex-container">

        <div class="flex-item-right">
            <div className="right_head">Add Admin</div>
            <div className="formDiv">

            <input onChange={(e)=>{setName(e.target.value)}} type="text" id="lname"  placeholder="Your name.."/>

            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="lname"   placeholder="enter your email"/>

            <input  onChange={(e)=>{setPassword(e.target.value)}} type="password" id="lname"   placeholder="give password"/>

            <input onChange={(e)=>{setCheckPassword(e.target.value)}} type="password" id="lname"   placeholder="re-enter password"/>

            <input onChange={(e)=>{setRegistrationId(e.target.value)}} type="text" id="lname"  placeholder="Registration Id"/>

            <input onChange={(e)=>{setPone(e.target.value)}} type="number" id="lname"  placeholder="Phone Number"/>

{/* admin/showDetails */}
            <button type="submit" onClick={(e)=>{AdminLogin(e)}}>
                
                    Submit
                
            </button>
            
            </div>
        </div>
       </div> 
     </div>
    )
}

export default Admin_sign_up
