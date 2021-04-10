import React from 'react'

import DetailsSec from './CommonPage/secondPage';

import CumDetails from './CumDetails';
import CumMedicine from './cumMedecine';
import Calender from './calender';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const CustomerRouter = () => {
    return (
        <div>
            <Router>
               <DetailsSec />
               <Switch> 
                    <Route path='/customer/details' component={CumDetails}/>

                    <Route path='/customer/medicine' component={CumMedicine}/>

                    <Route path='/customer/calender' component={Calender}/>
               </Switch>
           </Router>

        </div>
    )
}

export default CustomerRouter
