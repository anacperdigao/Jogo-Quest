import React, { createContext, useEffect, useState } from "react";
import api from "../api/api";

//-------------- Criando o contexto

export const QuizContext = createContext()
QuizContext.displayName = 'QuizContext'


//-------------- Criando o Provider

export const QuizProvider = ({children}) => {

    const stages = ['Start', 'Playing', 'End', 'Report']
    const [gameStages, setGameStages] = useState(stages[0])
    const [numeroDeQuestoes, setNumeroDeQuestoes] = useState(0);
    const [dadosApi, setDadosApi] = useState([]);
    const [indice, setIndice] = useState(0)
    const [score, setScore] = useState(0)
    const [respostaJaSelecionada, setRespostaJaSelecionada] = useState(false)


    useEffect( () => {
        api
            .get(`/api/questions?limit=${numeroDeQuestoes}`)
            .then((response) => {
                setDadosApi(response.data); 
            })
            .catch((erro) => {console.log(`Ops! Ocorreu um erro: ${erro}`)})
    }, [numeroDeQuestoes]);


    // useEffect(() => {
    //     localStorage.setItem('score', score)
    //     localStorage.setItem('numeroDeQuestoes', numeroDeQuestoes)
    //   },[score, numeroDeQuestoes])
    
    // // let scoreSaved = localStorage.getItem('score')
    // //  = localStorage.getItem('numeroDeQuestoes')


    return(
        <QuizContext.Provider 
            value={[
                numeroDeQuestoes, 
                setNumeroDeQuestoes, 
                dadosApi, 
                setDadosApi,
                stages,
                gameStages,
                setGameStages,
                indice,
                setIndice,
                score,
                setScore,
                respostaJaSelecionada,
                setRespostaJaSelecionada,
                ]}>
            {children}
        </QuizContext.Provider>
    )
}
