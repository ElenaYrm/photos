import { FC, InputHTMLAttributes } from 'react';
import { Field } from 'formik';

import styles from './input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isTouched: boolean | undefined;
  error: string | undefined;
  title: string;
}

export const Input: FC<InputProps> = (props) => {
  const { isTouched, error, title, type, ...restProps } = props;

  return (
    <div className={styles.field}>
      <label className={styles.field__label}>
        <span>{title}</span>
        <Field type={type || 'text'} className={styles.field__input} {...restProps} />
      </label>
      {isTouched && error && <span className={styles.field__error}>{error}</span>}
    </div>
  );
};
