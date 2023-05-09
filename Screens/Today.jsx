import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { addJoke, toggleStatus } from "../redux/jokesSlice";
import { jokeAddedSt, isLikedSt } from "../redux/jokesSelectors";
import { getJoke } from "../services/jokesAPI";

import FavIcon from "../assets/svg/FavIcon.js";
import FavFilled from "../assets/svg/FavFilled.js";

export default Today = () => {
  const [newJoke, setNewJoke] = useState(null);

  const jokeAdded = useSelector(jokeAddedSt);
  const isLiked = useSelector(isLikedSt);

  useEffect(() => {
    setNewJoke(jokeAdded);
  }, [jokeAdded]);

  const dispatch = useDispatch();

  const currentDay = new Date().getDate();

  useEffect(() => {
    getNewJoke();
  }, [currentDay]);

  const getNewJoke = async () => {
    const joke = await getJoke();
    dispatch(addJoke(joke));
  };

  const likeJoke = () => {
    dispatch(toggleStatus(newJoke.id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {newJoke ? (
          <>
            <Text style={styles.text}>{newJoke.text}</Text>
            <TouchableOpacity
              onPress={() => {
                likeJoke();
              }}
            >
              {!isLiked ? <FavIcon /> : <FavFilled />}
            </TouchableOpacity>
          </>
        ) : (
          <Text>No jokes yet</Text>
        )}

        <Button
          onPress={() => {
            getNewJoke();
          }}
          title={"Don't wait to midnight, add joke now:^)"}
          color="#E6E6E6"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
    marginHorizontal: 24,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
