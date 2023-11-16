import { FC, useEffect } from 'react';
import { Form, Formik } from 'formik';
import { ISignupForm } from '../../types/interfaces.ts';
import { initialSignupForm } from '../../constant/initialForm.ts';
import { signupValidationSchema } from '../../utils';
import { useAppDispatch } from '../../services/store';
import { login } from '../../services/store/auth/slice';
import { useSignupMutation } from '../../services/store/auth/api';
import { Input } from '../shared/Input/Input.tsx';
import { PasswordInput } from '../shared/PasswordInput';

import styles from './signupForm.module.scss';

export const SignupForm: FC = () => {
  const [signupApi, { data, isSuccess }] = useSignupMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(login(data.accessToken));
    }
  }, [isSuccess, dispatch]);

  async function handleSubmit(form: ISignupForm): Promise<void> {
    const userData = {
      email: form.email,
      password: form.password,
      username: form.username,
    };

    await signupApi(userData).unwrap();
  }

  return (
    <Formik initialValues={initialSignupForm} validationSchema={signupValidationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, errors, touched }) => (
        <Form className={styles.signup}>
          <Input name="email" type="text" title="Email" isTouched={touched.email} error={errors.email} />

          <Input name="username" type="text" title="Username" isTouched={touched.username} error={errors.username} />

          <PasswordInput isTouched={touched.password} error={errors.password} />

          <div className={styles.signup__wrapper}>
            <button type="submit" disabled={isSubmitting} className={styles.signup__btn}>
              Sign up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
