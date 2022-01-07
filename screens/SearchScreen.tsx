import * as React from 'react';
import {Button, View, Text, StyleSheet } from 'react-native';


import {useNavigation} from "@react-navigation/native";
import {useState} from "react";

export var quizInfo = [{
    theme : 0,
    number: 0,
    difficulty: ''
}
];

export default function SearchScreen() {
    const navigation = useNavigation();

    const [user_theme, setTheme] = useState(9)
    const [user_number, setNumber] = useState(5)
    const [user_difficulty, setDifficulty] = useState('easy')

    const getTheme = () => {
        quizInfo[0].theme = user_theme
    }

    const getNumber = () => {
        quizInfo[0].number = user_number
    }

    const getDifficulty = () => {
        quizInfo[0].difficulty = user_difficulty
    }

    return (
        <View style={styles.container}>
            <View style={styles.choice_container}>
                <Text style={styles.title}>Search Quiz</Text>

                <View style={styles.theme}>
                    <label>Select a theme</label>
                    <select placeholder={"Select a theme"} onChange={event => setTheme(event.target.value)} name="theme_choice" id="theme_choice" size={5}>
                        <option value={9}>General Knowledge</option>
                        <option value={10}>Books</option>
                        <option value={11}>Film</option>
                        <option value={12}>Music</option>
                        <option value={13}>Musicals & Theatres</option>
                        <option value={14}>Television</option>
                        <option value={15}>Video Games</option>
                        <option value={16}>Board Games</option>
                        <option value={17}>Science & Nature</option>
                        <option value={18}>Computer Sciences</option>
                        <option value={19}>Mathematics</option>
                        <option value={20}>Mythology</option>
                        <option value={21}>Sports</option>
                        <option value={22}>Geography</option>
                        <option value={23}>History</option>
                        <option value={24}>Politics</option>
                        <option value={25}>Art</option>
                        <option value={26}>Celebrities</option>
                        <option value={27}>Animals</option>
                        <option value={28}>Vehicles</option>
                        <option value={29}>Comics</option>
                        <option value={30}>Gadgets</option>
                        <option value={31}>Anime & Manga</option>
                        <option value={32}>Cartoon & Animations</option>
                    </select>
                </View>

                <View style={styles.number}>
                    <label>Select the number of questions</label>
                    <select onChange={event => setNumber(event.target.value)} name="numQuestion" placeholder={"Select the number of questions"} >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                        <option value={30}>30</option>
                        <option value={35}>35</option>
                        <option value={40}>40</option>
                        <option value={45}>45</option>
                        <option value={50}>50</option>
                    </select>
                </View>

                <View style={styles.difficulty}>
                    <label>Select the difficulty</label>
                    <select placeholder={"Select the difficulty"} onChange={event => setDifficulty(event.target.value)} name="difficulty" id="difficulty_choice">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </View>

            </View>
            <View style={styles.button}>
                <Button title={"Search Quiz"} onPress={() => {
                    getTheme()
                    getNumber()
                    getDifficulty()
                    navigation.navigate('Quiz');
                }}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: "center"
    },

    choice_container: {
        display: "flex",
        flexDirection: "column",
        width: '80%'
    },

    title: {
        marginTop: 10,
        marginBottom: 30,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },

    theme: {
        marginBottom: '20px'
    },

    number: {
        marginBottom: '20px'
    },

    difficulty: {

    },

    button: {
        width: '80%',
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 18,
        marginTop: 120,
    }
});
