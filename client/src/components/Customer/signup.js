import React,{useState , useContext , useEffect} from "react";
import banner from "../assets/banner.svg";

import AuthContext from '../../context/userAuthContexts/authContext';

import { Link  , useHistory} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Signup.css"

const Signup=()=>{

    const history = useHistory();

    const {
        registerUser,
        errors,
        clearError
      } = useContext(AuthContext);

    const [ customer , setCustomer ] = useState({
        name:'',
        password:'',
        phone:'',
        email:'',
        checkPassword:''
    })

    
    useEffect(() => {
        return () => {
          
          if (localStorage.userToken) {
          
            history.push('/customer');
         }
        }
      }, [])

    const { name, password , phone , email , checkPassword } = customer;

    const handleChange = (e)=>{
        setCustomer({
            ...customer,
            [e.target.name]:e.target.value
        })
    }

    const notifyPasswordReset = () => toast("password does not match");

    const notifyUnableLogin = () => toast("unable to login");

    const notifyLoginSuccess = () => toast("Account Created");

    const onSubmit= async(e)=>{

        e.preventDefault();

        await clearError();
        
        try{
            const data={
                name,
                password,
                checkPassword,
                phone,
                email
            };

            if(checkPassword!=password){
        
                notifyPasswordReset();

                return;
            }

            console.log(data);

            await registerUser(data);

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
    return(
    <div className="cusRegistration">
        
        <div className="imgbox">
        
            <img src={banner} alt='Banner Pic' />
        </div>

        <form onSubmit={onSubmit}>
        
            <input name='name'  onChange={handleChange} value={name} className="input_second" placeholder="Name" required/>
            
            <input name='phone' onChange={handleChange} value={phone} className="input_second" placeholder="Phone Number" required/>
            
            <input name='email' onChange={handleChange} value={email} className="input_second" placeholder="Email" required/>
            
            <input name='password' onChange={handleChange} value={password} className="input_second" placeholder="Password" required/>
            
            <input name='checkPassword' onChange={handleChange} value={checkPassword} className="input_second" placeholder="Re-Enter Password" required/>
            
            <div className="controls">
             
                <div className="checking">
             
                    <input type="checkbox" id="checkit" />
             
                    <label for="checkit" >Remember me</label>
                </div>
                
                   <button type='submit' >
                       
                       <ToastContainer 
                           autoClose={4000}
                           hideProgressBar={true}
                       />
                           Sign Up 
                   </button>
                   
            </div>
        </form>

        <div className='dividor'>
          
          <div className='border_div'></div>
          <div className='div_or'>
            <h5>Or</h5>
        
          </div>
          <div className='border_div'></div>
        </div>
        <div className='options'>
          <button>
            <Link to='/customer_signIn'>Sign In?</Link>
          </button>
        </div>

        {/* <div className="dividor">
                <div className="border_div">

                </div>
                <div className="div_or">
             
                    <h5>Or</h5>
                </div>
             
                <div className="border_div">

                </div>
            </div>
            <div className="options">
                   <button >
                      
                         SignUp using Google
                      
                   </button>
             
            </div> */}

    </div>)
}

export default Signup;