import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const EventScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
        <Text style={{fontFamily: 'bold', fontSize: 30,  alignSelf: 'center'}}>
          Events
        </Text>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});