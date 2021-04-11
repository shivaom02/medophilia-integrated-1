import React, { useState } from "react";
import "./welcome.css";
import Hospital from "./hospital.PNG";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";

function Newlog() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();
  const Login = async (e) => {
      e.preventDefault();
    try{
        const result = await axios.post("http://localhost:5000/hospital/login",{email,password});
        console.log(result);
        if(result.data.success==0){
                return alert("unable to login")
        }
        history.push("/admin/showDetails");
    }
    catch (e){
        alert(e,"Error");
    }
    
  };
  return (
    <div className="logIn">
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
