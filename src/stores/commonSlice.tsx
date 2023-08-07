import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommonInitialState {
  openLogin: boolean;
}

const initialState: CommonInitialState = {
  openLogin: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    openLoginForm: (
      state: CommonInitialState,
      action: PayloadAction<boolean>
    ) => {
      state.openLogin = action.payload;
    },
  },
});

export const { openLoginForm } = commonSlice.actions;

export default commonSlice.reducer;
