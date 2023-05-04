import { createSlice } from "@reduxjs/toolkit";

import { fetchJoke } from "./jokesOperation";
import { nanoid } from "nanoid";

const initialState = {
  jokes: [],
  loading: false,
  error: null,
};

const jokeSlice = createSlice({
  name: "jokes",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJoke.fulfilled, (state, { payload }) => {
        state.jokes.push({
          id: nanoid(),
          text: payload,
          isLiked: false,
        });
        state.loading = false;
      })
      .addCase(fetchJoke.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
  reducers: {
    toggleStatus(state, { payload }) {
      for (const joke of state) {
        if (joke.id === payload) {
          joke.isLiked = !joke.isLiked;
          break;
        }
      }
    },
  },
});

export const { toggleStatus } = jokeSlice.actions;
export default jokeSlice.reducer;
