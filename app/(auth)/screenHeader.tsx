import { Pressable, StyleSheet, Text, View } from "react-native";

import { Drawer } from "expo-router/drawer";
import { DrawerActions } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import auth from '@react-native-firebase/auth'
import { useNavigation } from "expo-router";

const ScreenHeader = () => {
    const navigation = useNavigation();

    const openSideMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    const goToProfile = () => {

    }

    return (
        
        <View style={styles.container}>
            
            <FontAwesome onPress={openSideMenu} name='bars' size={25}/>
            <View>
                <Text style={styles.title}>The Takedown</Text>
            </View>
            <Pressable onPress= { goToProfile }>
                <FontAwesome name="user" size={25}/>
            </Pressable>
        </View>
    )

}

export default ScreenHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'lightblue',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },

})