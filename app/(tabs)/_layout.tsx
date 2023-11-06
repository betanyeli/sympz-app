/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs, useNavigation } from 'expo-router'
import { Pressable, TouchableOpacity, useColorScheme } from 'react-native'

import Colors from '../../constants/Colors'
import styles from '../styles/layout/styles'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name']
    color: string
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
    const colorScheme = useColorScheme()
    const navigation = useNavigation()

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarStyle: styles.tabBarContainer,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    ),
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={
                                            Colors[colorScheme ?? 'light'].text
                                        }
                                        style={{
                                            marginRight: 15,
                                            opacity: pressed ? 0.5 : 1,
                                        }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
            <Tabs.Screen
                name="add-symptom"
                options={{
                    tabBarButton: () => (
                        <TouchableOpacity
                            style={styles.tabBarButton}
                            onPress={() =>
                                navigation.navigate('add-symptom' as never)
                            }
                        >
                            <FontAwesome size={28} name="plus-square-o" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tabs.Screen
                name="user-info"
                options={{
                    title: 'User',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="user-circle-o" color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}
