import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://v2.jokeapi.dev/',
});

export const getJoke = async () => {
  try {
    const {data} = await instance.get('/joke');
    return data;
  } catch (error) {
    throw error;
  }
};
