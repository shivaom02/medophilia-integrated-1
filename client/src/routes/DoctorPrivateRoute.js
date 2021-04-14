import React , {  useContext } from 'react';
import AuthContext from '../context/doctorAuthContexts/authContext';
import { Route , Redirect } from 'react-router-dom';

const DoctorPrivateRoute = ({component:Component , ...rest}) => {

    const {  doctorAuth  } = useContext(AuthContext);
    
    return (
        <Route 
           {...rest}
           render = {props => doctorAuth==undefined ? ( <Redirect to='/doctor'/>) : (<Component {...props}/>) }
           render = {props => !doctorAuth ? ( <Redirect to='/'/>) : (<Component {...props}/>) }
        />
    )
}

export default DoctorPrivateRoute