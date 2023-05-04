import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import FavIcon from "../assets/svg/FavIcon.js";
import FavFilled from "../assets/svg/FavFilled.js";

export default History = () => {
  const [jokes, setJokes] = useState([]);
  const allJokes = useSelector((state) => state.jokes);

  useEffect(() => {
    setJokes(allJokes);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={jokes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.content}>
            <Text style={styles.text}>{item.text}</Text>
            {item.isLiked ? <FavFilled /> : <FavIcon />}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  text: {
    fontSize: 16,
  },
  content: {
    padding: 24,
    borderBottomColor: "#E6E6E6",
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
