import axios from "./customAxios";

export const getUserProfileService = async () => {
  return await axios.get("user/profile");
};

export const updateUser = async () => {
  return await axios.patch("user/update");
};


