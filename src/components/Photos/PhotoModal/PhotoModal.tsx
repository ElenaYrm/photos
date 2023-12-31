import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IPhoto } from '../../../types/interfaces.ts';
import { PhotoComments } from '../PhotoComments';

import styles from './photoModal.module.scss';

interface PhotoModalProps extends IPhoto {
  onClose: () => void;
}

export const PhotoModal: FC<PhotoModalProps> = ({ onClose, id, url }) => {
  useEffect(() => {
    document.body.classList.add('stop-scroll');

    return () => {
      document.body.classList.remove('stop-scroll');
    };
  }, []);

  const parent: HTMLElement | null = document.getElementById('modal');
  if (!parent) return null;

  return createPortal(
    <>
      <div className={styles.modal} onClick={onClose} />
      <div className={styles.modal__content}>
        <button type="button" onClick={onClose} className={styles.modal__btn}>
          Close
        </button>
        <img src={url} alt={`Photo${id}`} className={styles.modal__img} />

        <PhotoComments photoId={id} />
      </div>
    </>,
    parent,
  );
};
