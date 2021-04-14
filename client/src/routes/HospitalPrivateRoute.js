import React , {  useContext } from 'react';
import AuthContext from '../context/adminAuthContexts/authContext';
import { Route , Redirect } from 'react-router-dom';

const HospitalPrivateRoute = ({component:Component , ...rest}) => {

    const {  adminAuth } = useContext(AuthContext);
    console.log(adminAuth);
    return (
        <Route 
           {...rest}
           render = {props => adminAuth==undefined ? ( <Redirect to='/admin'/>) : (<Component {...props}/>) }
        />
    )
}

export default HospitalPrivateRoute