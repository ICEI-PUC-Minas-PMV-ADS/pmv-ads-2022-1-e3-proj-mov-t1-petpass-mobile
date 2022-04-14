import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import HomePng from '../assets/HomePng.png';
import { styles } from './styles';

import { ButtonIcon } from '../components/ButtonIcon';
import { Background } from '../components/Background';

export function SignIn(){
  return(
    <Background>
      <View style={styles.container}>
        <Image
          source={HomePng}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Pet Pass
          </Text>

          <Text style={styles.subtitle}>
            Crie o cartão de vacina {'\n'}
            do seu pet online{'\n'}
            e acesse onde quiser
          </Text>

            <ButtonIcon
              title="Entrar com Email"
            />
        </View>
      </View>
    </Background>
  );
}