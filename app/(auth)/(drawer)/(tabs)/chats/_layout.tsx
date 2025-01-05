import { Link, Stack } from "expo-router";
import { TouchableOpacity, View } from 'react-native'

import { Colors } from '@/constants/Colors'
import Ionicons from "@expo/vector-icons/Ionicons";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen 
                name='chat'
                options={{
                    title: 'Chats',
                    headerLargeTitle: true,
                    headerBlurEffect: 'regular',
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerLeft: () => (
                        <View style={{flexDirection: 'row', gap: 30}}>
                        <TouchableOpacity>
                            <Ionicons name="ellipsis-horizontal-circle-outline"
                            color={Colors.dark.tabIconDefault}
                            size={30}/>
                        </TouchableOpacity>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', gap: 30, }}>
                            <Link href="/(modals)/new-chat" asChild>
                            <TouchableOpacity>
                                <Ionicons name='add-circle' color={Colors.light.tabIconDefault} size={20} />
                            </TouchableOpacity>
                            </Link>
                        </View>
                    ),
                    headerSearchBarOptions: {
                        placeholder: 'Search',
                    }
                }}
            />
        </Stack>
    )
}

export default Layout