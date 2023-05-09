import { createAsyncThunk } from "@reduxjs/toolkit";

import { getJoke } from "../services/jokesAPI";

export const fetchJoke = createAsyncThunk(
  "joke/get",
  async ({ rejectWithValue }) => {
    try {
      const result = await getJoke();
      console.log("operation: ", result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
