import React from 'react';
import Page1 from './components/PharmacyPanel/page1/page1'
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
 

import DoctorPrivateRoute from './routes/DoctorPrivateRoute';
import HospitalPrivateRoute from './routes/HospitalPrivateRoute';
import PharmachyPrivateRoute from './routes/PharmachyPrivateRoute';
import SuperAdminPrivateRoute from './routes/SuperAdminPrivateRoute';
import UserPrivateRoute from './routes/UserPrivateRoute';

import SuperAdminState from './context/superAdminAuthContexts/authState';
import AdminState from './context/adminAuthContexts/authState';
import DoctorState from './context/doctorAuthContexts/authState';
import PharmaState from './context/pharmaAuthContexts/authState';
import UserState from './context/userAuthContexts/authState';

function App() {

  return (
     
     <SuperAdminState>
          <AdminState>
               <DoctorState>
                    <PharmaState>
                         <UserState>
                         <Router>
               <Switch> 

                    <Route exact path='/' component={StartingPage}/>
                    
                    <Route exact path='/phrama/login' component={Page1}/>
                    
                    <PharmachyPrivateRoute path='/page2' component={Page2}/>

                    <PharmachyPrivateRoute path='/index' component={Index}/>

                    <PharmachyPrivateRoute path='/scanner' component={Qrsanner}/>
                    
                    <Route exact path='/admin' component={Welcome} />

                    <Route exact path='/admin_sign_up' component={Admin_Sign_Up} />

                    <HospitalPrivateRoute path='/admin/showDetails' component={DoctorShowDet} />
                   
                    <HospitalPrivateRoute path='/admin/registerDoctor' component={RegisterDoctor} />

                    <HospitalPrivateRoute path='/admin/registerPharmacy' component={RegisterPharmacy} />

                    <UserPrivateRoute path='/customer' component={Customer}/>

                    <Route path='/customer_signIn' component={CustomerSignIn} />

                    <UserPrivateRoute exact path='/cutomer_signup' component={Signup} />

                    <Route exact path='/doctor' component={DWelcome}/>

                    <DoctorPrivateRoute path='/doctor/welcome' component={DoctorWelcome}/>

                    <DoctorPrivateRoute path='/doctor/patient' component={Patient}/>
          
               </Switch>
        </Router>

                         </UserState>
                    </PharmaState>
               </DoctorState>
          </AdminState>
     </SuperAdminState>
  );
}

export default App;

