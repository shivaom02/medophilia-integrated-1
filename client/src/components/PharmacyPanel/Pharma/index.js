import React from "react";
import DetailsSec from "./detailSec/DetailSec";
import Section1 from "./BottomSec/Section1/section1";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Addto from "./BottomSec/AddTo/Addto";

import Notes from './BottomSec/Notes/Notes';

import Test from './BottomSec/Test/Test';

import Total from './BottomSec/total/total';

const Page1=()=>{
    return(<>

        <Router>
            <div>
              <DetailsSec/>
               <Switch> 
                    <Route exact path='/index' component={Section1}/>
                    
                    <Route path='/index/Test' component={Test}/>

                    <Route path='/index/total' component={Total} />

                    <Route path='/index/Notes'  component={Notes}/>

                    <Route path='/index/Addto' component={Addto}/>
               </Switch>
            </div>
        </Router>

    </>)
}

export default Page1;