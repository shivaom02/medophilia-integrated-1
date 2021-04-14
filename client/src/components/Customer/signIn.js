import React,{useState , useContext, useEffect} from "react";
import banner from "../assets/banner.svg";

import AuthContext from '../../context/userAuthContexts/authContext';

import { Link , useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './signIn.css';

const Registration=()=>{

  const history = useHistory();

  useEffect(() => {
    return () => {
      
      if (localStorage.userToken) {
      
        history.push('/customer');
     }
    }
  }, [])

  const {
    loginUser,
    errors,
    clearError
  } = useContext(AuthContext);

  const [ customer , setCustomer ] = useState({
  
    password:'',
    email:''
  }) 
  const {  password , email } = customer;

  const handleChange = (e)=>{
        setCustomer({
            ...customer,
            [e.target.name]:e.target.value
        })
    }

    const notifyUnableLogin = () => toast("unable to login");

    const notifyLoginSuccess = () => toast("Login Success");

    const onSubmit= async(e)=>{

        e.preventDefault();

        await clearError();
        
        try{
            const data={
                password,
                email
            };

            console.log(data);

            await loginUser(data);

            if(errors){

                notifyUnableLogin();

                return;
            }

            await notifyLoginSuccess();

            setTimeout(()=>history.push('/customer'),2000);

        }
        catch(e){
            console.log(e);
        }

    }

  return (
      <div className='cusRegistration'>
        <div className='imgbox'>
          <img src={banner} alt='Banner Pic' />
        </div>
        <form onSubmit={onSubmit} >

          <input className='input_first' name='email' value={email}  onChange={handleChange} placeholder='Username / Email' />
          <input className='input_first' name='password' value={password} onChange={handleChange} placeholder='User password' />
          
          <div className='controls'>
            
            <div className='checking'>
              <input type='checkbox' id='checkit' />
              <label for='checkit'>Remember me</label>
            </div>

            <button type='submit'>
                
                <ToastContainer 
                    autoClose={4000}
                    hideProgressBar={true}
                />

                 Sign In
            </button>
          
          </div>
          <div className='dividor'>
          
            <div className='border_div'></div>
            <div className='div_or'>
              <h5>Or</h5>
          
            </div>
            <div className='border_div'></div>
          </div>
          <div className='options'>
            <button>
              <Link to='/cutomer_signup'>Sign Up?</Link>
            </button>
          </div>
        </form>
      </div>
    );
}

export default Registration;