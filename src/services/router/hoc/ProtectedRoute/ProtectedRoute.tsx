import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProtectedRouteProps } from '../../types';
import { selectIsAuthorized } from '../../../store/auth/selectors';

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ redirectLink, children }) => {
  const isAuthorized: boolean = useSelector(selectIsAuthorized);

  if (!isAuthorized) return <Navigate to={redirectLink} />;

  return children;
};
