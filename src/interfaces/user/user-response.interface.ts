import { IResponse } from "../api/api.interface";
import { IUserSkill } from "./user-attributes.interface";

export interface IUser {
  id: string;
  name: string;
  phoneNumber: string | null;
  email: string;
  avatar: string | null;
skills: IUserSkill[] | [];
  position: string[] | [];
  rating: string | null;
  teamId: string | null;
  tournamentIds: string[] | null;
}

export interface IUpdateUserResponse extends IResponse {
  data: {
    user: IUser;
  };
}

export interface IGetPlayersResponse extends IResponse {
  data: {
    players: IUser[];
    count: number;
  };
}

export interface IGetPlayerDetailsResponse extends IResponse {
  data: {
    player: IUser;
  };
}
