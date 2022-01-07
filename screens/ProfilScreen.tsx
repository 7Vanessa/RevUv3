import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {auth} from "../firebase";

export default function ProfilPicture() {
    return(
        <View style={styles.container}>
            <Text style={styles.info}>User Informations</Text>
            <Text style={styles.mail}>Mail:</Text>
            <Text style={styles.mail_info}>{auth.currentUser?.email}</Text>
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

    mail: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },

    mail_info: {
        fontSize: 18
    }
})