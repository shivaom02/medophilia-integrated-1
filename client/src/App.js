import React from 'react';

import Page1 from './components/PharmacyPanel/page1/page1';
import Page2 from './components/PharmacyPanel/page2/page2';

import Index from './components/PharmacyPanel/Pharma/index';
import Qrsanner from './components/qrScanner/qrsanner';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Customer from './components/Customer/customerRouter';

import CustomerSignIn from './components/Customer/signIn';

import Welcome from './components/AdminPanel/welcome';

import DoctorShowDet from './components/AdminPanel/doctorShowDet';

import RegisterDoctor from './components/AdminPanel/register_doctor';

import RegisterPharmacy from './components/AdminPanel/PharmacyRegister';

import DWelcome from './components/DoctorPanel/doctorWelcome';

import DoctorWelcome from './components/DoctorPanel/doctorPanelWelcome';

import Patient from './components/DoctorPanel/Patient_name';

import Registration from './components/Customer/signIn';

import Signup from './components/Customer/signup';

import Admin_Sign_Up from './components/AdminPanel/Admin_sign_up';

import StartingPage from "./components/AdminPanel/StartingPage";
 
function App() {

  return (
  
       <Router>
               <Switch> 

                    <Route exact path='/' component={StartingPage}/>
                    <Route exact path='/phrama/login' component={Page1}/>
                    
                    <Route path='/page2' component={Page2}/>

                    <Route path='/index' component={Index}/>

                    <Route path='/scanner' component={Qrsanner}/>
                    
                    <Route exact path='/admin' component={Welcome} />

                    <Route exact path='/admin_sign_up' component={Admin_Sign_Up} />

                    <Route path='/admin/showDetails' component={DoctorShowDet} />
                   
                    <Route path='/admin/registerDoctor' component={RegisterDoctor} />

                    <Route path='/admin/registerPharmacy' component={RegisterPharmacy} />

                    <Route path='/customer' component={Customer}/>

                    <Route path='/customer_signIn' component={CustomerSignIn} />

                    <Route exact path='/cutomer_signup' component={Signup} />

                    <Route exact path='/doctor' component={DWelcome}/>

                    <Route path='/doctor/welcome' component={DoctorWelcome}/>

                    <Route path='/doctor/patient' component={Patient}/>
          
                    
                    
                    

               </Switch>
        </Router>

  );
}

export default App;

