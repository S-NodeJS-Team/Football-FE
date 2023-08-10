export interface ISignUpPayload {
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
}

export interface ISignInPayload {
  email: string;
  password: string;
}
