import { FC } from 'react';
import { useGetAllPhotosQuery } from '../../services/store/photos/api';
import { Photos } from '../../components/Photos';
import { Loader } from '../../components/shared/Loader';

import styles from './homePage.module.scss';

export const HomePage: FC = () => {
  const { data, isLoading } = useGetAllPhotosQuery();

  return (
    <section className={styles.home}>
      <div className="container">
        {isLoading && <Loader />}
        {data && <Photos photos={data.photos} />}
      </div>
    </section>
  );
};
