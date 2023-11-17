import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllPhotosQuery } from '../../services/store/photos/api';
import { useLazyRefreshQuery } from '../../services/store/auth/api';
import { selectUserInfo } from '../../services/store/auth/selectors';
import { useAppDispatch } from '../../services/store';
import { login } from '../../services/store/auth/slice';
import { Photos } from '../../components/Photos';
import { Loader } from '../../components/shared/Loader';
import { ErrorMessage } from '../../components/shared/ErrorMessage';

import styles from './homePage.module.scss';

export const HomePage: FC = () => {
  const { data, isLoading, isError } = useGetAllPhotosQuery();
  const [refresh, { data: userData, isSuccess: isRefreshSuccess }] = useLazyRefreshQuery();
  const user = useSelector(selectUserInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.id) {
      refresh();
    }
  }, [user, userData]);

  useEffect(() => {
    if (userData) {
      dispatch(login(userData));
    }
  }, [isRefreshSuccess, dispatch]);

  return (
    <section className={styles.home}>
      <div className="container">
        {isLoading && <Loader />}
        {!isLoading && isError && <ErrorMessage text="Something was wrong. Please, try later" />}
        {data && <Photos photos={data} />}
      </div>
    </section>
  );
};
