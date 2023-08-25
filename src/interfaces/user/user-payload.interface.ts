import { IQueryParams } from "../api/api.interface";
import { IUserSkill } from "./user-attributes.interface";

export interface IUpdateUser {
  name?: string;
  email?: string;
  avatar?: string | null;
  password?: string;
  phoneNumber?: string | null;
  skills?: IUserSkill[];
  position?: string[];
}
export interface IUserQuery extends IQueryParams {
  name?: string;
}

export interface IUserFilter {
  positions?: string[]
}