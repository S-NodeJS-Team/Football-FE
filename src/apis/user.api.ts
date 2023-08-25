import { IQueryParams } from "../interfaces/api/api.interface";
import { IUpdateUser, IUserFilter } from "../interfaces/user";

import axios from "./customAxios";

export const getUserProfileService = async () => {
  return await axios.get("user/get-user");
};

export const updateUserService = async (updateUserPayload: IUpdateUser) => {
  return await axios.patch("user/update-user", updateUserPayload);
};

export const getPlayersService = async (
  getPlayersParams: IQueryParams = {},
  filterPlayersBody: IUserFilter = {}
) => {
  return await axios.post("user/get-players", filterPlayersBody, {
    params: getPlayersParams,
    // filterPlayersBody,
  });
};

export const getPlayerDetailsService = async (
  playerId?: string
) => {
  return await axios.get(`user/${playerId}`)
}