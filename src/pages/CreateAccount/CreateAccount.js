import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';


import Union from '../../assets/Union.png';
import { styles } from './styles'

import { Background } from '../../Components/Background/background';
import {Button, TextInput} from "react-native-web";


export function CreateAccount(){
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
                    <View >
                        <View>
                            <Text style={styles.label}>
                                Nome
                            </Text>

                            <View style={styles.column}>
                                <TextInput placeholder={"Digite seu Email"} style={styles.TextInput}/>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.label, { marginBottom: 12, marginTop: 12} ]}>
                            Email
                        </Text>

                        <View style={styles.column}>
                            <TextInput placeholder={"Digite seu Email"} style={styles.TextInput}/>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.label, { marginBottom: 12, marginTop: 12} ]}>
                            Password
                        </Text>

                        <View style={styles.column}>
                            <TextInput placeholder={"Digite sua senha"} style={styles.TextInput}/>
                        </View>
                    </View>
                    <View style={{marginTop: 15, marginBottom: 90}}>
                        <Button
                            title="Criar sua conta"
                        />
                    </View>
                </View>
            </View>
        </Background>
    );
}