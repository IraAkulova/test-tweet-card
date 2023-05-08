import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, addFollower } from "./operations";

const usersInitialState = {
  cards: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const cardsSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [fetchUsers.rejected]: handleRejected,
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.cards = action.payload;
    },
    [addFollower.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload);
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
