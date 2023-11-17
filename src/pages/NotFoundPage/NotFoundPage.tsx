import { FC } from 'react';

import styles from './notFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  return (
    <section className={styles.error}>
      <div className="container">
        <div className={styles.error__message}>Page Not Found</div>
      </div>
    </section>
  );
};
