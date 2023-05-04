import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';

import {fetchJoke} from '../redux/jokesOperation';
import {toggleStatus} from '../redux/jokesSlice';

import FavIcon from '../assets/svg/FavIcon';
import FavFilled from '../assets/svg/FavFilled';

export default Today = () => {
  const newJoke = useSelector(state => state.jokes[state.jokes.length - 1]);

  setTimeout(
    getNewJoke,
    moment('24:00:00', 'hh:mm:ss').diff(moment(), 'seconds'),
  );

  const getNewJoke = () => {
    useDispatch(fetchJoke());
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{newJoke}</Text>
        <TouchableOpacity
          onPress={() => {
            useDispatch(toggleStatus(newJoke.id));
          }}>
          {newJoke.isLiked ? <FavIcon /> : <FavFilled />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginHorizontal: 24,
  },
  text: {
    fontSize: 24,
  },
});
