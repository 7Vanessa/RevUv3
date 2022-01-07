import { Entypo, FontAwesome, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function InputBox() {

    const [message, setMessage] = useState('') ;

    const onMicPress = () => {
        console.warn('mic');
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`);
        setMessage('');
    }

    const onPress = () => {
        if(!message) {
            onMicPress();
        }
        else {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color='grey' />
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    scrollEnabled={true}
                    placeholder={"Taper message"}
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color='grey' style={styles.icons} />
                {!message && <Fontisto name="camera" size={24} color='grey' style={styles.icons} />}
            </View>

            <TouchableOpacity onPress={onPress} >
                <View style={styles.buttonContainer}>
                    {!message ?
                        <MaterialCommunityIcons name="microphone" size={26} color='white' /> :
                        <MaterialIcons name="send" size={26} color='white' />}
                </View>
            </TouchableOpacity>

        </View>
    )
}
