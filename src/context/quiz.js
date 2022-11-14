import React, { createContext } from "react";

//-------------- Criando o contexto

export const QuizContext = createContext()
QuizContext.displayName = 'QuizContext'


//-------------- Criando o Provider

export const QuizProvider = ({children}) => {
    return(
        <QuizContext.Provider>
            {children}
        </QuizContext.Provider>
    )
}


//-------------- Criando o Provider