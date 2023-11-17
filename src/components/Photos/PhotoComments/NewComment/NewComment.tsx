import { ChangeEvent, FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAddCommentsMutation } from '../../../../services/store/comments/api';
import { selectUserInfo } from '../../../../services/store/auth/selectors';
import { INewComment } from '../../../../types/interfaces.ts';
import { ErrorMessage } from '../../../shared/ErrorMessage';

import styles from './newComment.module.scss';

export const NewComment: FC<{ photoId: number }> = ({ photoId }) => {
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');
  const [addComment] = useAddCommentsMutation();
  const { id: currentUser } = useSelector(selectUserInfo);

  async function handleClick(): Promise<void> {
    if (newComment) {
      const comment: INewComment = {
        text: newComment,
        photoId,
        userId: currentUser,
      };

      try {
        await addComment(comment).unwrap();
        setNewComment('');
      } catch (error) {
        setError('Something was wrong. Please, try later');
      }
    }
  }

  return (
    <>
      {error && <ErrorMessage text={error} />}
      <div className={styles.comments__wrapper}>
        <textarea
          rows={3}
          value={newComment}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setNewComment(event.target.value)}
          className={styles.comments__input}
        />
        <button type="button" onClick={handleClick} className={styles.comments__btn} disabled={newComment.length === 0}>
          Add comment
        </button>
      </div>
    </>
  );
};
