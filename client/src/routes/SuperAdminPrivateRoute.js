import React , {  useContext } from 'react';
import AuthContext from '../context/superAdminAuthContexts/authContext';
import { Route , Redirect } from 'react-router-dom';

const SuperAdminPrivateRoute = ({component:Component , ...rest}) => {

    const { superAdminAuth } = useContext(AuthContext);
    
    return (
        <Route 
           {...rest}
           render = {props => superAdminAuth==undefined ? ( <Redirect to='/superAdmin/login'/>) : (<Component {...props}/>) }
        />
    )
}

export default SuperAdminPrivateRoute