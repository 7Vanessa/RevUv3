import * as React from 'react';
import {Button, Dimensions, FlatList, Pressable, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import GroupList from '../components/GroupList';
import {useNavigation, useRoute} from "@react-navigation/native";
import Group from "../components/Group";


export default function GroupScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Groups</Text>
            </View>
            <ScrollView style={styles.groupList}>
                <Pressable onPress={() => navigation.navigate('MathsGroup')}>
                    <Group name={"Mathematics"}/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('ElecGroup')}>
                    <Group name={"Electronics"}/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('ComputerScience')}>
                    <Group name={"Computer Science"}/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('EnglishGroup')}>
                    <Group name={"English"}/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('CommunicationGroup')}>
                    <Group name={"Communication"}/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('BiologyGroup')}>
                    <Group name={"Biology"}/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PhysicsGroup')}>
                    <Group name={"Physics"}/>
                </Pressable>
            </ScrollView>
            <View style={styles.button}>
                <Button title={"Create Group"} onPress={() => navigation.navigate('ChooseParticipants')} />
            </View>
        </View>
    );
}

const widthDevice = Dimensions.get('screen').width;
const heightDevice = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    groupList: {
        height: 200
    },
    button: {
        width: '80%',
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 18,
        marginTop: 20
    }
});
