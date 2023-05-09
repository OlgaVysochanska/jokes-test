export const jokeAddedSt = (state) =>
  state.jokes.jokes[state.jokes.jokes.length - 1];

export const isLikedSt = (state) =>
  state.jokes.jokes[state.jokes.jokes.length - 1].isLiked;
