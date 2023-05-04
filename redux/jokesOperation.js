import {createAsyncThunk} from '@reduxjs/toolkit';

import {getJoke} from '../services/jokesAPI';

export const fetchJoke = createAsyncThunk(
  'joke/get',
  async ({rejectWithValue}) => {
    try {
      const result = await getJoke;
      return result;
    } catch ({response}) {
      return rejectWithValue(response);
    }
  },
);
