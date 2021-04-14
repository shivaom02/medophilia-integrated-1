import React , {  useContext } from 'react';
import AuthContext from '../context/userAuthContexts/authContext';
import { Route , Redirect } from 'react-router-dom';

const UserPrivateRoute = ({component:Component , ...rest}) => {

    const { userAuth } = useContext(AuthContext);
    
    return (
        <Route 
           {...rest}
           render = {props => userAuth==undefined ? ( <Redirect to='/customer_signIn'/>) : (<Component {...props}/>) }
        />
    )
}

export default UserPrivateRoute