import { FC } from 'react';

import styles from './loader.module.scss';

export const Loader: FC = () => {
  return <span className={styles.loader} data-testid="points"></span>;
};
