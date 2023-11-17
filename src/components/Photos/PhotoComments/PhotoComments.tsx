import { ChangeEvent, FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../../services/store/auth/selectors';
import { IComment, INewComment } from '../../../types/interfaces.ts';
import { useAddCommentsMutation } from '../../../services/store/comments/api';
import { CommentCard } from './CommentCard';
import { ErrorMessage } from '../../shared/ErrorMessage';

import styles from './photoComments.module.scss';

interface PhotoCommentsProps {
  comments: IComment[];
  photoId: number;
}

export const PhotoComments: FC<PhotoCommentsProps> = ({ comments, photoId }) => {
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
      {comments.length > 0 ? (
        <ul className={styles.comments__list}>
          {comments.map((item) => (
            <CommentCard key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        <div className={styles.comments__message}>There are no comments</div>
      )}
      {error && <ErrorMessage text={error} />}
      <div className={styles.comments__wrapper}>
        <textarea
          rows={3}
          value={newComment}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setNewComment(event.target.value)}
          className={styles.comments__input}
        />
        <button type="button" onClick={handleClick} className={styles.comments__btn}>
          Add comment
        </button>
      </div>
    </>
  );
};
