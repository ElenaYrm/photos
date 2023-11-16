import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthError, selectIsAuthorized } from '../../services/store/auth/selectors';
import { PATH } from '../../services/router/constants/paths.ts';
import { Page } from '../../services/router/types';
import { LoginForm } from '../../components/LoginForm';
import { SignupForm } from '../../components/SignupForm';
import { ErrorMessage } from '../../components/shared/ErrorMessage';

import styles from './loginPage.module.scss';

export const LoginPage: FC = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();
  const isAuthorized = useSelector(selectIsAuthorized);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (isAuthorized) {
      navigate(PATH[Page.Home]);
    }
  }, [isAuthorized, navigate]);

  const handlerClick = (): void => {
    setIsNewUser((isNew) => !isNew);
  };

  return (
    <section className={styles.auth}>
      <div className="container">
        <div className={styles.auth__wrapper}>
          <button type="button" onClick={handlerClick} disabled={!isNewUser} className={styles.auth__btn}>
            Login
          </button>
          <button type="button" onClick={handlerClick} disabled={isNewUser} className={styles.auth__btn}>
            Sign up
          </button>
        </div>
        {error && <ErrorMessage text={error} />}
        {isNewUser ? <SignupForm /> : <LoginForm />}
      </div>
    </section>
  );
};
