import {randArray} from "./utils";

export type StateQuestion = Question & {answers: string[]}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export const fetchQuestions = async (amount: number, difficulty: string, category: number) => {
    const recuperation = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

    const data = await (await fetch(recuperation)).json();

    return data.results.map((question: Question) => (
        {
            ...question,
            answers: randArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}
