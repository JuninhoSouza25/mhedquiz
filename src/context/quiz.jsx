import { createContext, useReducer, useState } from "react";
import questions from '../data/question'

const STAGES = [ "Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    questionsAnswered: 0,
    currentQuestion: 0,
    score: 0,
    answeredSelected: false,
    attempt: 1,
}

const quizReducer = (state, action) => {

    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case "REORDER_QUESTIONS" :
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            }

        case "CHANGE_QUESTION": 
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false

            if(!questions[nextQuestion]){
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answeredSelected: false,
            }

        case "NEW_GAME":
            return initialState;

        case 'CHECK_ANSWER':
            if (state.answeredSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            const time = action.payload.time;
            let correctAnswer = 0;

            if (answer === option) correctAnswer = 1;

            let timeScore

            if (answer === option){
                if (time >= 35){
                    timeScore = 10
                }else if(time < 35 && time >= 20){
                    timeScore = 7
                }else if(time < 20 && time >= 1){
                    timeScore = 5
                }else{
                    timeScore = 0
                }
            } else {
                timeScore = 0
            }

            return {
                ...state,
                score: state.score + timeScore,
                questionsAnswered: state.questionsAnswered + correctAnswer,
                answeredSelected: option,
            }

        case "ATTEMPT":
            return {
                ...state,
                attempt: state.attempt + 1
            }


        default: 
            return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState)


    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}