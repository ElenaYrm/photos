import { FC, useState, MouseEvent } from 'react';
import { Input, InputProps } from '../Input/Input.tsx';

import styles from './passwordInput.module.scss';

export const PasswordInput: FC<Omit<InputProps, 'title'>> = (props) => {
  const [isPassword, setIsPassword] = useState(true);

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setIsPassword((prev) => !prev);
  }

  return (
    <div className={styles.field}>
      <Input name="password" title="Password" type={isPassword ? 'password' : 'text'} {...props} />
      <button type="button" onClick={handleClick} className={styles.field__btn}>
        {isPassword ? 'Show' : 'Hide'}
      </button>
    </div>
  );
};
