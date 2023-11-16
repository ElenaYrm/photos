import { FC } from 'react';
import { Form, Formik } from 'formik';
import { initialLoginForm } from '../../constant/initialForm.ts';
import { ILoginForm } from '../../types/interfaces.ts';
import { loginValidationSchema } from '../../utils';
import { PasswordInput } from '../shared/PasswordInput';
import { Input } from '../shared/Input/Input.tsx';

import styles from './loginForm.module.scss';

export const LoginForm: FC = () => {
  function handleSubmit(form: ILoginForm): void {
    const userData = {
      email: form.email,
      password: form.password,
    };

    console.log(userData);
  }

  return (
    <Formik initialValues={initialLoginForm} validationSchema={loginValidationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, errors, touched }) => (
        <Form className={styles.login}>
          <Input name="email" type="text" title="Email" isTouched={touched.email} error={errors.email} />

          <PasswordInput isTouched={touched.password} error={errors.password} />

          <div className={styles.login__wrapper}>
            <button type="submit" disabled={isSubmitting} className={styles.login__btn}>
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
