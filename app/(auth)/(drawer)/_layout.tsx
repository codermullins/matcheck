import { Text, View } from 'react-native'

import { Drawer } from 'expo-router/drawer'
import React from 'react'

const ScreenDrawer = () => {
    return (
        <Drawer screenOptions={{headerShown: false}}/>
    )
}

export default ScreenDrawer