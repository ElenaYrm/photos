import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../services/router/constants/paths.ts';
import { Page } from '../../services/router/types';

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const isAuthorized = true;

  useEffect(() => {
    if (isAuthorized) {
      navigate(PATH[Page.Home]);
    }
  }, [isAuthorized, navigate]);

  return <div>Login</div>;
};
