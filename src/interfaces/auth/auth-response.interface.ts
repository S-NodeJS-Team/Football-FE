import { IResponse } from "../api/api.interface";
import { IUser } from "../user";

export interface ISignInResponse extends IResponse {
  data: {
    access_token: string;
    user: IUser;
  };
}

export interface ISignUpResponse extends IResponse {}

export interface IVerifyAccountResponse extends IResponse {}
