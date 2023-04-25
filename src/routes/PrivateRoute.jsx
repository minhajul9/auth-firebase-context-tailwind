import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext)

    if(user){
        return children;
    }

    else{
        return <Navigate to='/login' replace={true}></Navigate>
    }
};

export default PrivateRoute;