import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../../../services/store/auth/selectors';
import { IComment } from '../../../../types/interfaces.ts';
import { useDeleteCommentMutation } from '../../../../services/store/comments/api';
import { ErrorMessage } from '../../../shared/ErrorMessage';

import styles from './commentCard.module.scss';

export const CommentCard: FC<IComment> = ({ text, id, username, userId }) => {
  const [error, setError] = useState('');
  const [deleteComment] = useDeleteCommentMutation();
  const { id: currentUser } = useSelector(selectUserInfo);

  async function handleClick(): Promise<void> {
    try {
      await deleteComment(id).unwrap();
    } catch (error) {
      setError('Something was wrong. Please, try later');
    }
  }
  return (
    <li className={styles.comment}>
      <div className={styles.comment__wrapper}>
        <span className={styles.comment__user}>{username}</span>
        <span className={styles.comment__text}>{text}</span>
        {userId === currentUser ? (
          <button type="button" onClick={handleClick} className={styles.comment__btn}>
            Delete
          </button>
        ) : null}
      </div>
      {error && <ErrorMessage text={error} />}
    </li>
  );
};
