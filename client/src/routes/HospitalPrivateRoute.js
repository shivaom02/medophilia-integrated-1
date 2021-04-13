import React , {  useContext } from 'react';
import AuthContext from '../context/adminAuthContexts/authContext';
import { Route , Redirect } from 'react-router-dom';

const HospitalPrivateRoute = ({component:Component , ...rest}) => {

    const {  hospitalAuth } = useContext(AuthContext);
    
    return (
        <Route 
           {...rest}
           render = {props => !hospitalAuth ? ( <Redirect to='/admin'/>) : (<Component {...props}/>) }
        />
    )
}

export default HospitalPrivateRoute