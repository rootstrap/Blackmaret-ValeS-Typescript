import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { SIGNIN } from '../routes';

interface PrivateLayoutProps {
  children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={SIGNIN} />;
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <main>{children}</main>
    </div>
  );
};

export default PrivateLayout;
