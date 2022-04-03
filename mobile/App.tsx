import React from 'react';
import { StatusBar } from 'react-native';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App(){
 

  return(
      <Background>
        <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
        <Routes />
      </Background>
  );
}