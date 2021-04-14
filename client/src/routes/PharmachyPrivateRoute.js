import React , {  useContext } from 'react';
import AuthContext from '../context/pharmaAuthContexts/authContext';
import { Route , Redirect } from 'react-router-dom';

const PharmachyPrivateRoute = ({component:Component , ...rest}) => {

    const {  pharmacyAuth } = useContext(AuthContext);
    
    return (
        <Route 
           {...rest}
           render = {props => pharmacyAuth==undefined ? ( <Redirect to='/phrama/login'/>) : (<Component {...props}/>) }
        />
    )
}

export default PharmachyPrivateRoute