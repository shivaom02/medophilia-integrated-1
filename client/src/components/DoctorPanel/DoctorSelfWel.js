import React, { useState, useEffect, useContext } from "react";
import "../AdminPanel//welcome.css";
import Hospital from "../AdminPanel/hospital.PNG";
import DoctorContext from "../../context/doctorAuthContexts/authContext";
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Newlog() {
  const { loginDoctor, errors, clearError } = useContext(DoctorContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("doctorToken") || undefined
  );
  const history = useHistory();
  useEffect(() => {
    console.log(authToken);
    setAuthToken(localStorage.getItem("doctorToken"));
    if (authToken != undefined) {
      return history.push("/doctor/welcome");
    }
  }, [authToken]);

  const notify = (message) => toast(message);

  const Login = async (e) => {
    clearError();
    e.preventDefault();
    try {
      const data = { email, password };
      await loginDoctor(data);
      console.log(errors);
      if (errors) {
        setStatus(false);
        return notify("unable to login");
      }

      setStatus(true);
      notify("Login successfully");
      setTimeout(() => {
        history.push("/doctor/welcome");
      }, 3000);
    } catch (e) {
      alert(e, "Error");
    }
  };
  return (
    <div className="DoctorlogIn">
      {status ? (
        <ToastContainer
          hideProgressBar={true}
          autoClose={4000}
          bodyClassName={"success_message"}
        />
      ) : (
        <ToastContainer
          hideProgressBar={true}
          autoClose={4000}
          bodyClassName={"error_message"}
        />
      )}
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
