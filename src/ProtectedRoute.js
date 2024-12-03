// src/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';
import { isAuthenticated } from './auth';

const ProtectedRoute = () => {
    return isAuthenticated() ? <> <Layout />  <Outlet /></> : <Navigate to="/login" />;
};

export default ProtectedRoute;
