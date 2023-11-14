import { FC } from 'react';
import { ProtectedRouteProps } from '../../types';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ redirectLink, children }) => {
  const isAuthorized: boolean = true;

  if (!isAuthorized) return <Navigate to={redirectLink} />;

  return children;
};
