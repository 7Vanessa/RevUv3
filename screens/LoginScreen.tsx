import React, {useEffect, useState} from 'react'
import {Text, View, StyleSheet} from "react-native";
import {Input, Button} from "react-native-elements";

import {auth} from "../firebase";

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                var errorMessage = error.message
                alert(errorMessage)
            })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(function (user) {
            if(user) {
                navigation.replace('Root')
            } else {

            }
        })
        return unsubscribe
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Input
                placeholder="Enter your email..."
                label="Email"
                leftIcon={{type: 'material', name: 'email'}}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder="Enter your password..."
                label="Password"
                leftIcon={{type: 'material', name: 'lock'}}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Button title="Sign in" onPress={signIn} style={styles.button}/>
            <Button title="Register" style={styles.button} onPress={() => navigation.navigate('Register')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,

    },

    title: {
      textAlign: 'center',
        marginBottom: 40,
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 20
    },

    button: {
        width: 200,
        marginTop: 10,
    }
})