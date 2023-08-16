import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInitialState {
  currUser: any;
}

const initialState: UserInitialState = {
  currUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: UserInitialState, action: PayloadAction<object>) => {
      state.currUser = action.payload;
    },
    logout: (state: UserInitialState) => {
      localStorage.setItem("access_token", JSON.stringify(null));
      state.currUser = null;
    }
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
