import React from 'react';
import { View, Text, Image } from 'react-native'

import styles from "./styles";

export default function ProfilPicture({uri}) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={ uri={uri} }/>
        </View>
    )
}