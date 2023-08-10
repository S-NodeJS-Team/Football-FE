import { IResponse } from "../api/api.interface";

export interface ISignInResponse extends IResponse {
  data: {
    access_token: string;
    user: object;
  };
}

export interface ISignUpResponse extends IResponse {}

export interface IVerifyAccountResponse extends IResponse {}
