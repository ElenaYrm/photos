import { ChangeEvent, FC, useState } from 'react';
import { IComment, INewComment } from '../../../types/interfaces.ts';
import { useAddCommentsMutation } from '../../../services/store/comments/api';
import { CommentCard } from './CommentCard';

import styles from './photoComments.module.scss';

interface PhotoCommentsProps {
  comments: IComment[];
  photoId: number;
}

export const PhotoComments: FC<PhotoCommentsProps> = ({ comments, photoId }) => {
  const [newComment, setNewComment] = useState('');
  const [addComment] = useAddCommentsMutation();
  const currentUser = 1;

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
        console.log(error);
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
        <div>There are no comments</div>
      )}
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