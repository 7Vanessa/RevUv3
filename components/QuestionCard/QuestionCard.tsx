import React from 'react'
import {Text, View} from "react-native";

import styles, {ButtonContainer} from "./styles";
import styled from "styled-components";
import {ObjectAnswer} from "../../screens/QuizzScreen";

const Button = styled.button`
  font-size: 19px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: darkgrey;
  height: fit-content;
`;

const Container = styled.button`
  p {
    font-weight: bold;
    font-size: 19px;
    color: black;
    margin-bottom: 20px;
  }
`;

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: ObjectAnswer | undefined
    numQuestion: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers,callback, userAnswer, numQuestion, totalQuestions}) => {
    return(
        <View>
            <Container>
                <p className={'numero'}>
                    Question: {numQuestion} / {totalQuestions}
                </p>
                <p dangerouslySetInnerHTML={{ __html: question }} />
                <View>
                    {answers.map(answer => (
                        <ButtonContainer key={answer} correct={userAnswer?.correct_answer === answer}
                            userClicked={userAnswer?.answer === answer}>
                            <Button value={answer} onClick={callback} disabled={!!userAnswer}>
                                <span dangerouslySetInnerHTML={{ __html: answer}}/>
                            </Button>
                        </ButtonContainer>
                    ))}
                </View>
            </Container>
        </View>
    )
}

export default QuestionCard