import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children}) => {
    const [LoogedInUser, setLoogedInUser] = useContext(UserContext);
    const location = useLocation();
    return LoogedInUser.email ? children : <Navigate to="/login" state={{ from: location }} replace />;
    
};

export default PrivateRoute;