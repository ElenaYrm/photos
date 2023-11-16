import { FC, useEffect } from 'react';
import { Form, Formik } from 'formik';
import { initialLoginForm } from '../../constant/initialForm.ts';
import { useLoginMutation } from '../../services/store/auth/api';
import { useAppDispatch } from '../../services/store';
import { login } from '../../services/store/auth/slice';
import { ILoginForm } from '../../types/interfaces.ts';
import { loginValidationSchema } from '../../utils';
import { PasswordInput } from '../shared/PasswordInput';
import { Input } from '../shared/Input/Input.tsx';

import styles from './loginForm.module.scss';

export const LoginForm: FC = () => {
  const [loginApi, { data, isSuccess }] = useLoginMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(login(data.accessToken));
    }
  }, [isSuccess, dispatch]);

  async function handleSubmit(form: ILoginForm): Promise<void> {
    const userData = {
      email: form.email,
      password: form.password,
    };

    await loginApi(userData).unwrap();
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
