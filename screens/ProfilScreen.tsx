import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from "react-native";
import {auth} from "../firebase";
import {Container} from "./QuizzScreen";

export default function ProfilPicture() {

    const photo = {uri: auth.currentUser?.photoURL ? auth.currentUser.photoURL : "https://zupimages.net/up/22/01/nu7y.jpeg"}

    return(
        <View style={styles.container}>
            <Text style={styles.info}>User Informations</Text>
            <Text style={styles.general}>Profil Picture:</Text>
            <View style={styles.container_image}>
                <ImageBackground source={photo} style={styles.image}/>
            </View>
            <Text style={styles.general}>Pseudo:</Text>
            <Text style={styles.general_info}>{auth.currentUser?.displayName}</Text>
            <Text style={styles.general}>Mail:</Text>
            <Text style={styles.general_info}>{auth.currentUser?.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        height: '100%'
    },

    container_image: {
        height: 150,
        width: '100%'
    },

    image: {
        width: '100%',
        height: 150,
        fontSize: 18,
        marginBottom: 15,
        alignContent: 'center'
    },

    info: {
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },

    general: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },

    general_info: {
        fontSize: 18,
        marginBottom: 15
    }
})