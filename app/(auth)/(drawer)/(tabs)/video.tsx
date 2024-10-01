import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const VideoScreen = () => {
  return (
    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
      <Text style={{fontFamily: 'bold', fontSize: 30, marginTop: -50, alignSelf: 'center'}}>Video screen for matches</Text>
    </View>
  );
};

export default VideoScreen;