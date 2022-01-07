import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {fetchQuestions, StateQuestion} from "../API";

import { AntDesign } from '@expo/vector-icons';
import {useTheme} from "@react-navigation/native";
import QuestionCard from "../components/QuestionCard/QuestionCard";

export type ObjectAnswer = {
    question: string;
    answer: string;
    correct: boolean;
    correct_answer: string;
}

import styled from "styled-components";

import {quizInfo} from "./SearchScreen";

const Button = styled.button`
  font-size: 19px;
  border-radius: 10px;
  margin-bottom: 10px;
  border-color: #2f95dc;
  color: black;
  height: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .points {
    color: forestgreen;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Arial Inline;
    font-weight: 400;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 50px;
    text-align: center;
    margin: 20px;
    color: cornflowerblue;
  }
  .commencer {
    max-width: 200px;
  }
  
  .commencer, .suivant {
    cursor: pointer;
    background-color: cornflowerblue;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-weight: bold;
    font-size: 16px;
  }

`;

export default function QuizzScreen() {

    const [questions, setQuestions] = useState<StateQuestion[]>([])
    const [points, setPoints] = useState(0)
    const [chargement, setChargement] = useState(false)
    const [termine, setTermine] = useState(true)
    const [userAnswers, setUserAnswers] = useState<ObjectAnswer[]>([])
    const [numero, setNumero] = useState(0)

    console.log(questions)

    const validateAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!termine) {
            const answer = e.currentTarget.value
            const correct = questions[numero].correct_answer === answer
            if(correct) {
                setPoints(prevState => prevState+1)
            }
            const objectAnswer = {
                question : questions[numero].question,
                answer,
                correct,
                correct_answer: questions[numero].correct_answer,
            }

            setUserAnswers(prevState => [...prevState, objectAnswer])
        }
    }

    const nextQuestion = () => {
        const suivQuestion = numero+1
        if (suivQuestion === quizInfo[0].number) {
            setTermine(true)
        }
        else {
            setNumero(suivQuestion)
        }
    }

    const startQuiz = async () => {
        setChargement(true)
        setTermine(false)

        const nouvellesQuestions = await fetchQuestions(quizInfo[0].number, quizInfo[0].difficulty, quizInfo[0].theme)

        setQuestions(nouvellesQuestions)
        setPoints(0)
        setUserAnswers([])
        setNumero(0)

        setChargement(false)
    }

    return (
        <View style={styles.container}>
            <Container>
                <h1>Quiz</h1>
                {termine || userAnswers.length === quizInfo[0].number ? (
                    <Button className={'commencer'} onClick={startQuiz}>Commencer</Button>) : null}
                {!termine ? <p className={"points"} >Points : {points} / {quizInfo[0].number}</p>: null}
                {chargement && <AntDesign name="loading1" size={24} color={useTheme().colors.text} />}
                {!chargement && !termine && (<QuestionCard numQuestion={numero + 1} totalQuestions={quizInfo[0].number}
                                                           question={questions[numero].question} answers={questions[numero].answers}
                                                           userAnswer={userAnswers ? userAnswers[numero] : undefined} callback={validateAnswer}/>)}
                {!termine && !chargement && userAnswers.length === numero+1 && numero!== quizInfo[0].number-1 ?(
                    <button className={'suivant'} onClick={nextQuestion}>Suivant</button>) : null}
            </Container>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '85%',
        justifyItems: "center",
        textAlign: "center",
        boxSizing: "border-box",
    },
});
