import {Button, Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import auth from '@react-native-firebase/auth'

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      {/* TODO get School Logo */}
      <View style={styles.container}>
        <Image
          style={styles.proPic}
          source={require('../../../assets/images/logo.png')}
        />
        {/* TODO add connect for school colors */}
        <Text style={styles.text}>SCHOOL NAME</Text>
        {/* TODO add for school address */}
        <Text style={styles.address}>123 MAIN ST SOMEPLACE, STATE 12345</Text>
      </View><Button title='Sign out' onPress={() => auth().signOut()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
  },
  proPic: {
    marginTop: 100,
    height: 200,
    maxWidth: 200,
    width: '30%',
    resizeMode: 'contain',
  },
  text: {
    marginTop: -50,
    textShadowColor: 'white',
    textShadowRadius: 10,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginBottom: 30,
  },
  address: {
    backgroundColor: 'rgba(128, 128, 128, .7)',
    padding: 5,
    fontWeight: 'bold',
    color: 'black',
  },
});

