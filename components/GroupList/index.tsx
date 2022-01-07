import React from 'react';
import {Pressable, View} from "react-native";

import styles from "./styles";

import Group from "../Group";
import groups from "../../Data/groups";

import {useNavigation} from "@react-navigation/native";

export default function GroupList() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            {groups.map((item) => (
                <Group name={item.title} />
            ))}
        </View>
    )
}

