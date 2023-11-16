import { FC } from 'react';
import { Form, Formik } from 'formik';
import { IApiErrorResponse, ISignupForm } from '../../types/interfaces.ts';
import { isErrorWithMessage, isFetchBaseQueryError } from '../../types/guards.ts';
import { initialSignupForm } from '../../constant/initialForm.ts';
import { signupValidationSchema } from '../../utils';
import { useAppDispatch } from '../../services/store';
import { setError } from '../../services/store/auth/slice';
import { useSignupMutation } from '../../services/store/auth/api';
import { useLoginResult } from '../../hooks/useLoginResult.ts';
import { Input } from '../shared/Input/Input.tsx';
import { PasswordInput } from '../shared/PasswordInput';

import styles from './signupForm.module.scss';

export const SignupForm: FC = () => {
  const [signupApi, { data, isSuccess }] = useSignupMutation();
  const dispatch = useAppDispatch();
  useLoginResult(data, isSuccess);

  async function handleSubmit(form: ISignupForm): Promise<void> {
    const userData = {
      email: form.email,
      password: form.password,
      username: form.username,
    };

    try {
      await signupApi(userData).unwrap();
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        dispatch(setError((error.data as IApiErrorResponse).message));
      } else if (isErrorWithMessage(error)) {
        dispatch(setError(error.message));
      }
    }
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
