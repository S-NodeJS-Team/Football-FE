import { ISignInPayload, ISignUpPayload } from "../interfaces/auth";
import axios from "./customAxios";

export const signUpService = async (signUpPayload: ISignUpPayload) => {
  return await axios.post("auth/sign-up", signUpPayload);
};

export const signInService = async (signInPayload: ISignInPayload) => {
  return await axios.post("auth/sign-in", signInPayload);
};

export const verifyAccountService = async (verifyToken: string) => {
  return await axios.get(`auth/verify-account?token=${verifyToken}`);
};

export const forgotPasswordService = async (email: string) => {
  return await axios.post("auth/forgot-password", email);
};

export const updatePasswordService = async (newPassword: string) => {
  return axios.patch("auth/reset-password", newPassword);
};
