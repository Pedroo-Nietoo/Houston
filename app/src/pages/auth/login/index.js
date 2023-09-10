import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import React, { useState } from 'react';

export default function Login({ navigation }) {
    const [passwordVisible, setPasswordVisible] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                mode='outlined'
                cancelable='true'
                style={styles.input}
                keyboardType='email-address'
                label="E-mail"
                left={
                    <TextInput.Icon
                        icon={'email'}
                    />
                }
            />

            <TextInput
                mode='outlined'
                cancelable='true'
                style={styles.input}
                label="Senha"
                secureTextEntry={passwordVisible}
                right={
                    <TextInput.Icon
                        icon={passwordVisible ? 'eye-off' : 'eye'}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                }
                left={
                    <TextInput.Icon
                        icon={'lock'}
                    />
                }
            />

            <View style={styles.spanContainer}>
                <Text>Não possui uma conta?</Text>
                <Button onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</Button>
            </View>


            <Button
                style={styles.button}
                dark='true'
                icon="login"
                mode="contained-tonal"
                onPress={() => navigation.navigate('Home')}>
                Entrar
            </Button>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginHorizontal: 50,
        marginVertical: 20,
    },
    button: {
        marginHorizontal: 50,
        marginVertical: 20,
        padding: 6
    },
    title: {
        textAlign: 'center',
        fontSize: 45,
        marginBottom: 50,
        color: '#6750A4',
    },
    spanContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});