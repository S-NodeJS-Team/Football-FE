import { IUserSkill } from "./user-attributes.interface";

export interface IUpdateUser {
  name?: string;
  email?: string;
  avatar?: string | null;
  password?: string;
  phoneNumber?: string | null;
  skills?: IUserSkill[]
}

