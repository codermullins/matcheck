import { CameraType, CameraView, useCameraPermissions } from 'expo-camera'
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';

import { Button } from 'react-native-elements';

const WrestlingButton = () => (
<View style={styles.buttonContainer}>
  <View style={{marginLeft: 0, maxWidth: '100%', width: '50%', borderWidth: 1, padding: 3 }}>
    <Text style={{alignSelf: 'center'}}>Name of Wrestler</Text>
    <View style={{width: 50, padding: 3}}>
      <Button style={{width: 25}} title="C" />
    </View>
    <View style={{width: 50, padding: 3}}>
      <Button style={{width: 25}} title="T3" />
    </View>
    <View style={{width: "100%", flexDirection: 'row', padding: 3}}>
      <View style={{marginRight: 5, width: 50}}>
      <Button title="NF3" />
      </View>
      <View style={{marginRight: 5, width: 50}}>
        <Button title="NF4" />
      </View>
      <View style={{marginRight: 5, width: 50}}>
      <Button title="NF5" />
      </View>
    </View>
  </View>
      
  <View style={{maxWidth: '100%', width: '50%', borderWidth: 1, padding: 3}}>
    <Text style={{alignSelf: 'center'}}>Name of Wrestler</Text>
    <View style={{width: 50, marginLeft:'auto', padding: 3}}>
      <Button style={{width: 25}} title="C" />
    </View>
    <View style={{width: 50, marginLeft:'auto', padding: 3}}>
      <Button style={{width: 25}} title="T3" />
    </View>
    <View style={{width: '100%', flexDirection: 'row', marginLeft: 'auto', padding: 3, justifyContent: 'flex-end'}}>
      <View style={{marginLeft: 5, width: 50}}>
        <Button title="NF3" />
      </View>
      <View style={{marginLeft: 5, width: 50}}>
        <Button title="NF4" />
      </View>
      <View style={{marginLeft: 5, width: 50}}>
        <Button title="NF5" />
      </View>
    </View>
  </View>
</View>
)

const redScore = 0
const greenScore = 0

const VideoScreen = () => {
  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()

  if(!permission){
    return (<View />)
  }
  if (!permission.granted){
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission"/>
      </View>
    )
  }

  function togggleCameraFacing(){
    setFacing(current => (current === 'back' ? 'front' : 'back'))
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={{borderWidth: 1, width: '50%', textAlign: 'center'}}>Score</Text>
          <Text style={{borderWidth: 1, width: '50%', textAlign: 'center'}}>Score</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={{borderWidth: 1, width: '50%', textAlign: 'center'}}>4</Text>
          <Text style={{borderWidth: 1, width: '50%', textAlign: 'center'}}>2</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={togggleCameraFacing}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>

      <WrestlingButton />

      </CameraView>        

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    maxHeight: '25%',
    maxWidth: '100%',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default VideoScreen;