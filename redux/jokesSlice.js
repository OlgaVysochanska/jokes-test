import { createSlice } from "@reduxjs/toolkit";

import "react-native-get-random-values";
import { nanoid } from "nanoid";

const jokesInitialState = [];

const jokeSlice = createSlice({
  name: "jokes",
  initialState: jokesInitialState,
  reducers: {
    addJoke: {
      reducer(state, action) {
        console.log("slice", action.payload);
        console.log(state);
        state.jokes.push(action.payload);
        console.log("after state push", action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            isLiked: false,
          },
        };
      },
    },
    toggleStatus(state, action) {
      for (const joke of state.jokes) {
        if (joke.id === action.payload) {
          joke.isLiked = !joke.isLiked;
          break;
        }
      }
    },
  },
});

export const { addJoke, toggleStatus } = jokeSlice.actions;
export default jokeSlice.reducer;
