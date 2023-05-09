import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, addFollower } from "./operations";

const usersInitialState = {
  cards: [],
  isFollowing: false,
  error: null,
};


const handleRejected = (state, action) => {
  state.isFollowing = false;
  state.error = action.payload;
};

const cardsSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  extraReducers: {
    [fetchUsers.rejected]: handleRejected,
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.cards = action.payload;
    },
    [addFollower.fulfilled](state, action) {
      state.error = null;
      state.isFollowing = true;
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
