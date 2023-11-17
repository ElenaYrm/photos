export interface ILoginForm {
  email: string;
  password: string;
}

export interface ISignupForm extends ILoginForm {
  username: string;
}

export interface IUserData {
  id: number;
  email: string;
  username: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUserData;
}

export interface IApiErrorResponse {
  message: string;
  errors: { [k: string]: string[] };
}

export interface IPhoto {
  id: number;
  url: string;
}

export interface IComment {
  id: number;
  text: string;
  userId: number;
  photoId: number;
  username: string;
}

export interface INewComment extends Omit<IComment, 'id' | 'username'> {}
