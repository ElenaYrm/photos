import { ReactNode } from 'react';

export enum Page {
  Home = 'home',
  Login = 'login',
  NotFound = 'notFound',
}

export interface ProtectedRouteProps {
  redirectLink: string;
  children: ReactNode;
}
