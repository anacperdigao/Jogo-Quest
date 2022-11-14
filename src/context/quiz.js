import React, { createContext, useReducer, useState } from "react";

//-------------- Criando o contexto

export const QuizContext = createContext()
QuizContext.displayName = 'QuizContext'


//-------------- Criando o Provider

export const QuizProvider = ({children}) => {

    const [numeroDeQuestoes, setNumeroDeQuestoes] = useState();
    const [quizState, dispatch] = useReducer(quizReducer, initialState)

    return(
        <QuizContext.Provider value={[quizState, dispatch, numeroDeQuestoes, setNumeroDeQuestoes]}>
            {children}
        </QuizContext.Provider>
    )
}


//-------------- Criando o quizReducer

const stages = ['Start', 'Playing', 'End']

const initialState = {
    gameStage: stages[0],
}


const quizReducer = (state, action) => {

    switch(action.type){

        case 'changeState':
            return {
                ...state,
                gameStage: stages[1],
            }


        default:
            return state;
    }
}