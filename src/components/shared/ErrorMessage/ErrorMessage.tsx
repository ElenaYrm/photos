import { FC } from 'react';
import classnames from 'classnames';

import styles from './errorMessage.module.scss';

interface MessageProps {
  text: string;
  className?: string;
}

export const ErrorMessage: FC<MessageProps> = ({ text, className }) => {
  return <div className={classnames(styles.error, className)}>{text}</div>;
};
