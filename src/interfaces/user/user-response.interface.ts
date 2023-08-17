import { IResponse } from "../api/api.interface";
import { IUserSkill } from "./user-attributes.interface";

export interface IUser {
  name: string;
  phoneNumber: string | null;
  email: string;
  avatar: string | null;
  skills: IUserSkill[] | [];
  rating: string | null;
  position: string[] | null;
  teamId: string | null;
  tournamentIds: string[] | null;
}

export interface IUpdateUserResponse extends IResponse {
  data: {
    user: IUser;
  };
}
