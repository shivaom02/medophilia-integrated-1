import React from 'react';

import Page1 from './components/PharmacyPanel/page1/page1';
import Page2 from './components/PharmacyPanel/page2/page2';

import Index from './components/PharmacyPanel/Pharma/index';
import Qrsanner from './components/qrScanner/qrsanner';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import AdminPanelRouter from './components/AdminPanel/AdminPanelRouter';

import Customer from './components/Customer/customerRouter';

import CustomerSignIn from './components/Customer/signIn';

import DoctorRouter from './components/DoctorPanel/doctorRouter';
import Registration from './components/Customer/signIn';
import Signup from './components/Customer/signup';
function App() {

  return (
  
       <Router>
               <Switch> 
                    <Route exact path='/' component={Page1}/>
                    
                    <Route path='/page2' component={Page2}/>

                    <Route path='/index' component={Index}/>
                    <Route path='/scanner' component={Qrsanner}/>

                    <Route exact path='/admin' component={AdminPanelRouter} />

                    <Route exact path='/customer' component={CustomerSignIn} />

                    <Route path='/customer/details' component={Customer}/>

                    <Route exact path='/doctor' component={DoctorRouter} />
                    <Route exact path='/signin' component={Registration} />
                    <Route exact path='/signup' component={Signup} />
               </Switch>
        </Router>

  );
}

export default App;

