import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/home';
import Favorites from './screens/favorites';
import DrawerScreen from './screens/drawerScreen';

const Tab = createMaterialBottomTabNavigator();


const Tabs = () => (
    <Tab.Navigator initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#3274B2' }}>
        <Tab.Screen name="Home" component={Home}
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen name="Notifications" component={Favorites}
            options={{
                tabBarLabel: 'Favoritas',
                tabBarIcon: ({ color }) => (
                    <Icon name="bell" color={color} size={26} />
                ),
            }} />
    </Tab.Navigator>
);

export default Tabs;