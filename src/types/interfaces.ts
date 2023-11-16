export interface ILoginForm {
  email: string;
  password: string;
}

export interface ISignupForm extends ILoginForm {
  username: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
    username: string;
    updatedAt: string;
    createdAt: string;
  };
}

export interface IApiErrorResponse {
  message: string;
  errors: { [k: string]: string[] };
}
