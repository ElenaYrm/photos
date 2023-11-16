import { FC } from 'react';
import { Form, Formik } from 'formik';
import { ISignupForm } from '../../types/interfaces.ts';
import { initialSignupForm } from '../../constant/initialForm.ts';
import { signupValidationSchema } from '../../utils';
import { Input } from '../shared/Input/Input.tsx';
import { PasswordInput } from '../shared/PasswordInput';

import styles from './signupForm.module.scss';

export const SignupForm: FC = () => {
  function handleSubmit(form: ISignupForm): void {
    const userData = {
      email: form.email,
      password: form.password,
      user_name: form.username,
    };

    console.log(userData);
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
