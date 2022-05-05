import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MeusPets from './MeusPets/index';
import Profile from './Profile/index';
import { Entypo, Feather } from '@expo/vector-icons'
import Presentation from "./presentation/Presentation";
import {CreateAccount} from "./CreateAccount/CreateAccount";
import {Login} from "./Login/Login";
import useUser from "../store/user";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes(){

    const {user} = useUser()

    console.log('teste', user)
    return(
        <>
        {!user ? (
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Presentation} />
                        <Stack.Screen name="Criar conta" component={CreateAccount} />
                        <Stack.Screen name="Login" component={Login} />
                    </Stack.Navigator>
        ) : (
            <>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Presentation} />
                    <Stack.Screen name="Criar conta" component={CreateAccount} />
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
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
            </>
    )}
        </>
    )
}