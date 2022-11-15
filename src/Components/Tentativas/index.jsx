import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../context/quiz.js';
import * as S from "./style.js"



function Tentativas() {

  const [ 
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
    ] = useContext(QuizContext)


  return (
    <S.Tentativas>
        <S.ContainerTotal>

            <S.ContainerPerguntas>
                <S.Titulo>Tentativas Anteriores</S.Titulo>
            </S.ContainerPerguntas>

            <S.ContainerRespostas>
                <p>Score: 0 de 0</p>
                <S.BotaoPrincipal>Apagar</S.BotaoPrincipal>
            </S.ContainerRespostas>

            <S.HomeIcon onClick={() => setGameStages(stages[0])} />

        </S.ContainerTotal>
    </S.Tentativas>
  );
}

export default Tentativas;