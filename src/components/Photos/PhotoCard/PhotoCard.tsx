import { FC, useState } from 'react';
import { IPhoto } from '../../../types/interfaces.ts';
import { PhotoModal } from '../PhotoModal';

import styles from './photoCard.module.scss';

export const PhotoCard: FC<IPhoto> = ({ id, url }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleClick(): void {
    setIsOpenModal((prev) => !prev);
  }

  return (
    <>
      <li className={styles.photos__item}>
        <button type="button" className={styles.photos__btn} onClick={handleClick}>
          <img src={url} alt={`Photo${id}`} className={styles.photos__img} />
        </button>
        <PhotoModal isOpen={isOpenModal} onClose={handleClick} id={id} url={url} />
      </li>
    </>
  );
};
