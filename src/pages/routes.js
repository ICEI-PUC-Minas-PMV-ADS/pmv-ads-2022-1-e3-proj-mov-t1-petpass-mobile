import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MeusPets from './MeusPets/index';
import Profile from './Profile/index';
import { Entypo, Feather } from '@expo/vector-icons'
import Presentation from "./presentation/Presentation";
import {CreateAccount} from "./CreateAccount/CreateAccount";
import CadastrarPet from "./CadastrarPet/CadastrarPet";
import {Login} from "./Login/Login";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes(){

    const [teste, setTeste] = useState(false)
    return(
        <>
        {/* ! */}
        {!teste ? (
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Presentation} options={{header:() => null}} />
                        <Stack.Screen name="Criar conta" component={CreateAccount} options={{header:() => null}} />
                        <Stack.Screen name="Login" component={Login} options={{header:() => null}} />
                        <Stack.Screen name="CadastrarPet" component={CadastrarPet} />
                    </Stack.Navigator>
        ) : (
            <>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle:{
                            backgroundColor: '#fff',
                            borderTopColor:'transparent',
                        },
                        tabBarActiveTintColor: '#19225B',
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
                        name="CadastrarPet"
                        component={CadastrarPet}
                        options={{
                            tabBarIcon:({size, color}) => (
                                <Feather name='book' size={size} color={color}/>
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
