import React from 'react';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Welcome from '../Welcome/welcome';
import DoctorShowDet from './doctorShowDet';
import RegisterDoctor from '../registers/register_doctor';
import RegisterPharmacy from '../registers/PharmacyRegister';

function App() {

  return (
  
       <Router>
               <Switch> 
                    <Route exact path='/admin' component={Welcome} />
                   
                    <Route path='/admin/showDetails' component={DoctorShowDet} />
                   
                    <Route path='/admin/registerDoctor' component={RegisterDoctor} />

                    <Route path='/admin/registerPharmacy' component={RegisterPharmacy} />

               </Switch>
        </Router>

  );
}

export default App;

