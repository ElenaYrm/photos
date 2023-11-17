import { FC } from 'react';
import { useGetAllCommentsToPhotoQuery } from '../../../services/store/comments/api';
import { CommentCard } from './CommentCard';
import { NewComment } from './NewComment';
import { Loader } from '../../shared/Loader';
import { ErrorMessage } from '../../shared/ErrorMessage';

import styles from './photoComments.module.scss';

interface PhotoCommentsProps {
  photoId: number;
}

export const PhotoComments: FC<PhotoCommentsProps> = ({ photoId }) => {
  const { data, isLoading, isError } = useGetAllCommentsToPhotoQuery(photoId);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && isError && <ErrorMessage text="Something was wrong. Please, try later" />}
      {!isLoading &&
        (data && data.length > 0 ? (
          <ul className={styles.comments__list}>
            {data.map((item) => (
              <CommentCard key={item.id} {...item} />
            ))}
          </ul>
        ) : (
          <div className={styles.comments__message}>There are no comments</div>
        ))}
      <NewComment photoId={photoId} />
    </>
  );
};
