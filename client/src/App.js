import React from 'react';
import './App.css';

// import Page1 from './components/PharmacyPanel/page1/page1';
// import Page2 from './components/PharmacyPanel/page2/page2';

// import Index from './components/PharmacyPanel/Pharma/index';

import Index from './components/PharmacyPanel/Pharma/index';
import Qrsanner from './components/qrScanner/qrsanner';
// import Pharma from './components/PharmacyPanel/Pharma/index';
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Customer from './components/Customer/CommonPage/secondPage'

function App() {

  return (
       
    <Customer />
       /* <Router>
            <div>
               <Switch> 
                    <Route exact path='/' component={Page1}/>
                    
                    <Route path='/page2' component={Page2}/>

                    <Route path='/index' component={Index}/>
                    <Route path='/scanner' component={Qrsanner}/>
               </Switch>
            </div>
        </Router>
        */
  );
}

export default App;

