import React,{useState} from 'react';

import { Link } from 'react-router-dom';
import './superadmin_register.css';
import AxiosInstance from "../../utilsClient/AxiosInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const Register_SuperAdmin = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [rePass,setRePass]=useState("");
  const [address,setAddress]=useState("");
  const [medical,SetMedical]=useState("");
  const [description,SetDescription]=useState("");
  const [status,setStaus]=useState(false);

  const notify = (message) => toast(message);
  const OnSubmit= async(e)=>{
      try{
          e.preventDefault();
          if(rePass!=password){
            return  notify("password does not match");
          }

          const data={
            name,
            email,
            address,
            medical,
            description,
            password
          };
          const result=await AxiosInstance.post("/admin/register",data);

          console.log(result);
          if(result.data.success==0){
            setStaus(false);
            return  notify("Something went wrong");
          }
            setStaus(true);
            // setAddress("")
            // setName("")
            // setEmail("")
            // setPassword("")
            // SetDescription("");
            // SetMedical("");
            // setAddress("");
            // SetDescription("");
            
            return  notify("Registered successfully");

      }
      catch(e){
        console.log(e);
      }

  }
  return (
    <div className='register'>
    {status?<ToastContainer
      hideProgressBar={true}
      autoClose={4000}
      bodyClassName={"success_message"}
    />:<ToastContainer
      hideProgressBar={true}
      autoClose={4000}
      bodyClassName={"error_message"}
    />}
      <div class='flex-container'>
        <div class='flex-item-left'>
          <div className='left_content'>
            <p className='content'>
              <Link to='/admin/registerDoctor'>Register Admin</Link>
            </p>

            <p className='content'>
              <Link>Delete</Link>
            </p>
            <p className='content'>
              <Link>Logout</Link>
            </p>
          </div>
        </div>
        <div class='flex-item-right'>
          <div className='right_head'>Register an Admin</div>
          <div className='formDiv'>
            <input onChange={(e)=>{setName(e.target.value)}} type='text' id='lname' placeholder='Admin name..' />
            <input onChange={(e)=>{setEmail(e.target.value)}} type='email' id='lname' placeholder='Admin email' />
            <input onChange={(e)=>{setPassword(e.target.value)}} type='password' id='lname' placeholder='Admin Password' />
            <input onChange={(e)=>{setRePass(e.target.value)}} type='password' id='lname' placeholder='Re-enter password' />
            <input onChange={(e)=>{setAddress(e.target.value)}} type='text' id='lname' placeholder='Admin address..' />
            <input
              onChange={(e)=>{SetMedical(e.target.value)}}
              type='text'
              id='lname'
              placeholder="Enter Admin's medical name"
            />
            <textarea
              onChange={(e)=>{SetDescription(e.target.value)}}
              type='text'
              id='lname'
              rows="5"
              placeholder="Enter Admin's Description"
            ></textarea>
            {/* /admin/showDetails */}
            
            <button onClick={(e)=>{OnSubmit(e)}} type='submit'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register_SuperAdmin;
