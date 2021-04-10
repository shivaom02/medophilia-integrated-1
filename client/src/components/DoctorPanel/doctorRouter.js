import React from 'react'

import Welcome from './doctorWelcome';

import DoctorWelcome from './doctorPanelWelcome';

import Patient from './Patient_name';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const CustomerRouter = () => {
    return (
        <div>
            <Router>
               <Switch> 
                    <Route exact path='/doctor' component={Welcome}/>

                    <Route path='/doctor/welcome' component={DoctorWelcome}/>

                    <Route path='/doctor/patient' component={Patient}/>
               </Switch>
           </Router>

        </div>
    )
}

export default CustomerRouter
