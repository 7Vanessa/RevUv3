import { StyleSheet } from "react-native";
import styled from "styled-components";

const styles = StyleSheet.create({
    answer_container: {
        justifyContent: "center",
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '70%'
    }
})


export default styles;

type ButtonContainerProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonContainer = styled.div<ButtonContainerProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 19px;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
    correct
        ? '#59BC86'
        : !correct && userClicked
            ? '#C16868'
            : 'darkgrey'};
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: black;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;