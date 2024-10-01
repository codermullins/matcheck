import { StatusBar, StyleSheet, Text, View } from 'react-native'

import React from 'react'

function chat() {
  return (
    <View style={styles.container}>
    <Text style={{fontFamily: 'bold', fontSize: 30, marginTop: -50, alignSelf: 'center'}}>News Screen</Text>
    </View>
    
  )

}

export default chat


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

});