import axios from "axios";

export const instance = axios.create({
  baseURL: "https://v2.jokeapi.dev",
});

export const getJoke = async () => {
  try {
    const { data } = await instance.get("/joke/Any", {
      params: {
        type: "single",
      },
    });
    return data.joke;
  } catch (error) {
    throw error;
  }
};
