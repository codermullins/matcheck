import { Button, Pressable } from 'react-native';

import AthleteProfileScreen from './athleteProfileScreen';
import { Drawer } from 'expo-router/drawer';
import EditProfileScreen from '../../editProfileScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import RosterScreen from './roster';
import ScreenHeader from '../../screenHeader';
import { Tabs } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerStyle: {backgroundColor: 'lightblue'}, headerTitle: () => <ScreenHeader/>}}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="roster"
        options={{
          title: 'Roster',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="users" color={color} />,
        }}
      />
      <Tabs.Screen
        name="event"
        options={{
          title: 'Event',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: 'Video',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="video-camera" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="athleteProfileScreen"
        options={{
          tabBarButton: () => null
        }}
      />
    </Tabs>
    
  );
}

function ScreenNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='roster' component={RosterScreen}/>
          
          <Stack.Screen name='EditProfile' component={EditProfileScreen}/>
          <Stack.Screen name='AthleteProfile' component={AthleteProfileScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
  )
}
