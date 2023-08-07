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
    login: (state: UserInitialState, action: PayloadAction<string>) => {
      state.currUser = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
