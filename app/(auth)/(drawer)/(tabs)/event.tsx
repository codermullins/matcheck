import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const EventScreen = () => {
  return (
    <View>
        <Text style={{fontFamily: 'bold', fontSize: 30, marginTop: -50, alignSelf: 'center'}}>
          Events
        </Text>
    </View>
  );
};

export default EventScreen;

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});