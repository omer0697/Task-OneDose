// src/routes/ProtectedRoute.js

import React, { useEffect,useLayoutEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated, checkAuthentication } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import Navbar from '../components/ui/Navbar/Navbar';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ component: Component }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(checkAuthentication());
    }
    , [dispatch]);
    
  return isAuthenticated ? 
  <>
    <Navbar >
      <Component /> 
    </Navbar>
  </>
    :
    <Navigate to="/login" />;
};

export default ProtectedRoute;