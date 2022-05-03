import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MeusPets from './MeusPets/index';
import Profile from './Profile/index';
import { Entypo, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#fff',
                    borderTopColor:'transparent',
                },
                tabBarActiveTintColor: '#08B139',
                // tabBarInactiveTintColor:
                
            }}
        >
            <Tab.Screen 
            name="Meus Pets"
            component={MeusPets}
            options={{
                tabBarIcon:({size, color}) => (
                    <Entypo name='home' size={size} color={color}/>
                )
            }}
            />

            <Tab.Screen 
            name="Perfil" 
            component={Profile}
            options={{
                tabBarIcon:({size, color}) => (
                    <Feather name='user' size={size} color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}