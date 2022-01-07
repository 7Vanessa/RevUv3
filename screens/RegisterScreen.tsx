import React, {useState} from 'react'
import {Text, View, StyleSheet} from "react-native";
import {Input, Button} from "react-native-elements";
import {auth} from "../firebase";

export default function RegisterScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            var user = userCredential.user
            user?.updateProfile({
                displayName: name,
                photoURL: imageUrl ? imageUrl : "https://zupimages.net/up/22/01/nu7y.jpeg",
            }).then(function () {

            }).catch(function (error) {

            });
            navigation.popToTop()
        })
            .catch((error) => {
                var errorMessage = error.message
                alert(errorMessage)
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Input
                placeholder="Enter your name..."
                label="Name"
                leftIcon={{type: 'material', name: 'badge'}}
                value={name}
                onChangeText={text => setName(text)}
            />
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
            <Input
                placeholder="Enter your image URL..."
                label="Profile Picture"
                leftIcon={{type: 'material', name: 'face'}}
                value={imageUrl}
                onChangeText={text => setImageUrl(text)}
                secureTextEntry
            />
            <Button title="Register" style={styles.button} onPress={register}/>
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