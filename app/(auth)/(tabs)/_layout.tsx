import { Button, Pressable } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import ScreenHeader from '../screenHeader';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
   
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerStyle: {backgroundColor: 'lightblue'}, headerTitle: () => <ScreenHeader/> }}>
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
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
