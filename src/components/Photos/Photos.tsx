import { FC } from 'react';
import { PhotoCard } from './PhotoCard';
import { IPhoto } from '../../types/interfaces.ts';

import styles from './photos.module.scss';

export const Photos: FC<{ photos: IPhoto[] }> = ({ photos }) => {
  return (
    <>
      {photos.length > 0 ? (
        <ul className={styles.photos}>{photos && photos.map((item) => <PhotoCard key={item.id} {...item} />)}</ul>
      ) : (
        <div className={styles.photos__message}>There are no photos</div>
      )}
    </>
  );
};
