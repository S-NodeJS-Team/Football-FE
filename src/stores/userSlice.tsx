import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/user";

export interface UserInitialState {
  currUser: IUser | null;
}

const initialState: UserInitialState = {
  currUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: UserInitialState, action: PayloadAction<IUser>) => {
      state.currUser = action.payload;
    },
    logout: (state: UserInitialState) => {
      localStorage.setItem("access_token", JSON.stringify(null));
      state.currUser = null;
    },
    updateUser: (state: UserInitialState, action: PayloadAction<IUser>) => {
      state.currUser = action.payload;
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;
