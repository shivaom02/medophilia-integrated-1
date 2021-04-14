import React, {useState,useContext,useEffect} from "react";
import "./welcome.css";
import Hospital from "./hospital.PNG";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";
import AxiosInstance from "../../utilsClient/AxiosInstance";
import AdminContext from "../../context/adminAuthContexts/authContext";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Newlog() {
  
  const {loginAdmin,errors,clearError}=useContext(AdminContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status,setStatus]=useState(false);
  const [authToken,setAuthToken]=useState(localStorage.getItem("adminToken")||undefined);
  const history=useHistory();


  const notify = (message) => toast(message);
  const Login = async (e) => {
      e.preventDefault();
      clearError();
    try{
        
        await loginAdmin({email,password})
        console.log(errors,"jihuhflkjsdblfkjbsdlkjf");
        if(errors){
          setStatus(false);
          return  notify("You are not registered");
        }

        setStatus(true);
        notify("Registered successfully");
        setTimeout(()=>{
          history.push("/admin/registerDoctor");
        },[2000])
        
    }
    catch (e){
        alert(e,"Error");
    }
    
  };

  useEffect(()=>{
    console.log(authToken);
    setAuthToken(localStorage.getItem("adminToken"));
    if(authToken!=undefined){
      return history.push("/admin/registerDoctor");
    }
    
  },[authToken])
  return (
    <div className="logIn">
    {status?<ToastContainer
      hideProgressBar={true}
      autoClose={4000}
      bodyClassName={"success_message"}
    />:<ToastContainer
      hideProgressBar={true}
      autoClose={4000}
      bodyClassName={"error_message"}
    />}
      <div className="head">welcome back</div>
      <div className="ImgBox">
        <img src={Hospital} alt=" " height="900" width="700" />
      </div>
      <div className="formDiv">
        <form>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            className="username1"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            required
            autoComplete="off"
            className="username2"
          />

          {/* /admin/showDetails */}
          <button
            type="submit"
            onClick={(e) => {
              Login(e);
            }}
          >
            logIn
          </button>

{/* admin/registerDoctor */}
          {/* <button type="submit">
            <Link to="/admin/registerDoctor">Sign Up</Link>
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default Newlog;
