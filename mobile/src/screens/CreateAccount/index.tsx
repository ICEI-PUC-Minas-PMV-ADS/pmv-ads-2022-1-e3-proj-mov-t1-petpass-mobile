import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';


import Union from '../../assets/Union.png';
import { styles } from './styles'

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { SmallInput } from '../../components/SmallInput';
import api from '../../api/api';

export function CreateAccount(navigation: { navigate: (arg0: string) => void; }){

    function handleSignIn() {
        navigation.navigate("Login");
    }

    const [name, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmitCreateAccount = () => {

        api.post('/users', {name, email, password}, 
        { headers:{'Content-Type':'application/json'}})
        .then(() => handleSignIn).catch(() => setError(true))
    }

console.log(name, email, password, error)
    return(
        <Background>
            <View style={styles.container}>
                <Image
                    source={Union}
                    style={styles.image}
                    resizeMode="stretch"
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Crie sua conta
                    </Text>
                    <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 } ]}>
                  Nome
                </Text>

                <View style={styles.column}>
                  <SmallInput placeholder='Digite seu Nome' onChangeText={setNome}/>
                </View>
              </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12, marginTop: 12} ]}>
                  Email
                </Text>

                <View style={styles.column}>
                  <SmallInput placeholder='Digite seu Email' onChangeText={ setEmail}/>
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12, marginTop: 12} ]}>
                  Password
                </Text>

                <View style={styles.column}>
                  <SmallInput placeholder='Digite sua Senha' onChangeText={setPassword}/>
                </View>
              </View>
              <View style={{marginTop: 15}}>
                    <ButtonIcon
                        title="Criar sua conta"
                        onPress={handleSubmitCreateAccount}
                    />
                    </View>
                </View>
                {error && <Text>O email informado já existe, tente com outro email ou faça login em sua conta</Text>}
            </View>
        </Background>
    );
}