import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

import auth from '@react-native-firebase/auth'
import { getSchool } from '@/app/store/auth';

// import axios from 'axios'


// const MongoUrl = 'http://192.168.1.68:4000/schools/getSchools'

const HomeScreen = () => {
  const [schoolName, setSchoolName] = useState({name: "", mascot: "", color1: ""})

  const dispatch = useAppDispatch()

  const school = useAppSelector(state => state.school.data)
  
  useEffect(() => {
    dispatch(getSchool())
  }, [])
  
    // console.log(school)


  return (
    <View style={styles.root}>
      {/* TODO get School Logo */}
      <View style={styles.container}>
        <Image
          style={styles.proPic}
          source={require('../../../../assets/images/logo.png')}
        />
        <Text style={styles.text}>School</Text>
        <Text>{schoolName.mascot}</Text>
        
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

