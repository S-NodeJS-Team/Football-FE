import { IUpdateUser } from "../interfaces/user";
import axios from "./customAxios";

export const getUserProfileService = async () => {
  return await axios.get("user/get-user");
};

export const updateUserService = async (updateUserPayload : IUpdateUser) => {
  return await axios.patch("user/update-user", updateUserPayload);
};


