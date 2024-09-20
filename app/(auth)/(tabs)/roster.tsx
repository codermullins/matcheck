import {Button, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth'
import {rosterList} from '../../../model/db'

const RosterScreen = () => {
  const user = auth().currentUser
  
  const Item = ({name, weightClass, grade}) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.weightClass}>{weightClass}</Text>
      <View>
        <Text style={styles.grade}>{grade}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
        <FlatList data={rosterList}
        renderItem={({item}) => 
            <TouchableOpacity>
                <Item
                    name={item.name}
                    weightClass={item.weightClass}
                    grade={item.grade}
                    email={item.email}/>
            </TouchableOpacity>
        }/>
    </SafeAreaView>
  );
};

export default RosterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      marginHorizontal: 20
    },
    item: {
      backgroundColor: 'grey',
      padding: 25,
      marginVertical: 8,
      marginHorizontal: 16,
      alignContent: 'space-between',
      borderRadius: 10,
    },
    name: {
      fontSize: 32,
      position: 'absolute',
      alignItems: 'flex-start',
      marginLeft: 10,
    },
    weightClass: {
      fontSize: 32,
      fontWeight: 'bold',
      position: 'absolute',
      alignSelf: 'flex-end',
      padding: 10,
    },
    grade: {
      fontSize: 20,
      bottom: -15,
      marginLeft: -10,
    },
  });