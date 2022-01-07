import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from "react-native";
import {auth} from "../firebase";

export default function ProfilPicture() {
    return(
        <View style={styles.container}>
            <Text style={styles.info}>User Informations</Text>
            <Image source={{uri: auth.currentUser?.photoURL}}></Image>
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
        paddingRight: 15
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