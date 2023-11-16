import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IPhoto } from '../../../types/interfaces.ts';

import styles from './photoModal.module.scss';

interface PhotoModalProps extends IPhoto {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoModal: FC<PhotoModalProps> = ({ isOpen, onClose, id, url }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('stop-scroll');
    }

    return () => {
      document.body.classList.remove('stop-scroll');
    };
  }, []);

  if (!isOpen) {
    return null;
  }

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
      </div>
    </>,
    parent,
  );
};
