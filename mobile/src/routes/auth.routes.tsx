import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import {CreateAccount} from "../screens/CreateAccount";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />

            <Screen
                name="CreateAccount"
                component={CreateAccount}
            />
        </Navigator>
    )
}