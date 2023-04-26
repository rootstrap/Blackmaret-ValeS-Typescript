import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { DASHBOARD } from '../routes';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={DASHBOARD} />;
  }

  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
