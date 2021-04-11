import React,{useState} from 'react'
import './register_doctor.css'
import axios from "axios";
import { Link } from 'react-router-dom';

function Register_doctor() {
            
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
    
    const RegisterDoctor=async(e)=>{
        e.preventDefault();
        try{
            if(password!==checkPassword){
                return alert("wrong password");
            }
            const data={
                name,
                email,
                phone,
                speciality,
                address,
                license,
                hospital,
            }
            const result =await axios.post("http://localhost:50000/doc/register",data);
            if(result.data.success==0){

                return alert("Error");
            }
            
            alert("Registered successfully");
        }
        catch(e){
            console.log(e);
        }
    }


    return (
        <div className="register">
           <div class="flex-container">
          <div class="flex-item-left">
              <div className="left_content">
                  <p className="content">Add admin</p>
                 
                  <p className="content">
                  
                     <Link to='/admin/registerDoctor'>register a doctor</Link>
               
                  </p>
                
                  <p className="content">
                  
                     <Link to='/admin/registerPharmacy'>register a pharmacy</Link>
                  </p>
                  <p className="content">Delete</p>
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

               <input onChange={(e)=>{setAddress(e.target.value)}} type="text" id="lname" placeholder="Address"/>

               <input onChange={(e)=>{setLicense(e.target.value)}} type="text" id="lname" placeholder="License"/>



               setHospital

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
