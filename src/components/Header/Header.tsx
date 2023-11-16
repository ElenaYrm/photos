import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from '../../services/store/auth/selectors';
import { useLogoutMutation } from '../../services/store/auth/api';
import { useAppDispatch } from '../../services/store';
import { logout } from '../../services/store/auth/slice';

import styles from './header.module.scss';

export const Header: FC = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const [logoutApi, { isSuccess }] = useLogoutMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(logout());
    }
  }, [isSuccess, dispatch]);

  async function handleClick(): Promise<void> {
    await logoutApi().unwrap();
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <h1 className={styles.header__logo}>Photos</h1>
          {isAuthorized && (
            <button type="button" onClick={handleClick} className={styles.header__btn}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
