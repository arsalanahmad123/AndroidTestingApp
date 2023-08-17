import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Tabs() {

    return (

        <Tab.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Signup"
                component={Signup}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Ionicons name="person-add-outline" color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;
