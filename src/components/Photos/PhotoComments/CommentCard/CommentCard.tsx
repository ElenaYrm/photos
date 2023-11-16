import { FC } from 'react';
import { IComment } from '../../../../types/interfaces.ts';
import { useDeleteCommentMutation } from '../../../../services/store/comments/api';

import styles from './commentCard.module.scss';

export const CommentCard: FC<IComment> = ({ text, id, username, userId }) => {
  const [deleteComment] = useDeleteCommentMutation();
  const currentUser = 1;

  async function handleClick(): Promise<void> {
    try {
      await deleteComment(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <li className={styles.comment}>
      <span className={styles.comment__user}>{username}</span>
      <span className={styles.comment__text}>{text}</span>
      {userId === currentUser ? (
        <button type="button" onClick={handleClick} className={styles.comment__btn}>
          Delete
        </button>
      ) : null}
    </li>
  );
};
