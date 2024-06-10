import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../AppContext';

const PrivateRoute = ({ element: Component, adminOnly = false }) => {
  const { user } = useContext(AppContext);

  if (!user.id) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return <Component />;
};

export default PrivateRoute;
