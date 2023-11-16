import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email must match the pattern: user@example.com'),
  password: Yup.string().required('Password is required').min(8, 'Password must be min 8 characters long'),
});

export const signupValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email must match the pattern: user@example.com'),
  password: Yup.string().required('Password is required').min(8, 'Password must be min 8 characters long'),
  username: Yup.string().required('User name is required'),
});
