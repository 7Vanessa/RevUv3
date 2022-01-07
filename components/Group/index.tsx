import React from 'react';
import {Pressable, Text, useColorScheme, View} from "react-native";
import {Feather} from "@expo/vector-icons";

import styles from "../Group/styles";
import {useRoute, useTheme} from "@react-navigation/native";

export default function Group({name}) {
    const route = useRoute();
    return(
            <View style={styles.container}>
                <View style={styles.nom}>
                    <Text style={{color: useTheme().colors.text, fontSize: 18}}>{name}</Text>
                </View>
                <View style={styles.icon}>
                    <Feather name="chevron-right" size={24} color={useTheme().colors.text} />
                </View>
            </View>
    )
}