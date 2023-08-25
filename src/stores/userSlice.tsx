import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/user";

export interface UserInitialState {
  currUser: IUser | null;
  players: IUser[];
  countPlayers: number | null;
  playersFilterDialog: boolean;
  positionsFilter: string[];

  playerDetails: IUser | null;
}

const initialState: UserInitialState = {
  currUser: null,
  players: [],
  countPlayers: null,
  playersFilterDialog: false,
  positionsFilter: [],
  playerDetails: null,
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
    updatePlayers: (
      state: UserInitialState,
      action: PayloadAction<IUser[]>
    ) => {
      state.players = action.payload;
    },
    updateCountPlayers: (
      state: UserInitialState,
      action: PayloadAction<number>
    ) => {
      state.countPlayers = action.payload;
    },
    updatePlayersFilterDialog: (state: UserInitialState) => {
      state.playersFilterDialog = !state.playersFilterDialog;
    },
    updatePositionsFilter: (
      state: UserInitialState,
      action: PayloadAction<string[]>
    ) => {
      state.positionsFilter = action.payload;
    },
    updatePlayerDetails: (
      state: UserInitialState,
      action: PayloadAction<IUser>
    ) => {
      state.playerDetails = action.payload;
    },
  },
});

export const {
  login,
  logout,
  updateUser,
  updatePlayers,
  updateCountPlayers,
  updatePlayersFilterDialog,
  updatePositionsFilter,
  updatePlayerDetails,
} = userSlice.actions;

export default userSlice.reducer;
