import React,{useState} from 'react'
import './register_doctor.css'
import axios from "axios";
import { Link ,useHistory} from 'react-router-dom';


function Register_doctor() {
    const history=useHistory();

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    const [checkPassword,setCheckPassword]=useState("");
    const [licence,setLicence]=useState("");
    const Register= async(e)=>{
        e.preventDefault();
        const data={name,email,address,phone,password,licence}
        try{
            const result =await axios.post(`${window.location.protocol}//${window.location.hostname}:5000/admin/register`,data);
            if(result.data.success==0){
                return alert("Unable to register pharma");
            }
            alert("registered successfully");
            history.push("/admin/showDetails");

        }
        catch (e){
            console.log(e);
        }

    }
    return (
        <div className="register">
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

export default Register_doctor
