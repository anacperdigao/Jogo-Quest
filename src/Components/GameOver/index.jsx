import React, { useContext, useEffect } from 'react'
import { QuizContext } from '../../context/quiz'
import * as S from './style'
import Trofeu from '../../assets/trophy-cup-svgrepo-com.svg'


const GameOver = () => {

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
    setRespostaJaSelecionada
] = useContext(QuizContext)


  const handleReestart = () => {
    setGameStages(stages[0])
    setNumeroDeQuestoes(0)
    setIndice(0)
    setDadosApi([])
    setScore(0)
  }
  

  return (
    <S.ContainerTotal>
    
    <S.ContainerPerguntas>
        <S.Imagem src={Trofeu} alt="Trofeu" />
    </S.ContainerPerguntas>

    <S.ContainerRespostas>
        <S.Titulo>Resultado Final:</S.Titulo>
        <S.Paragrafo>Você acertou {score} pergunta(s) de {numeroDeQuestoes}.</S.Paragrafo>

        <S.BotaoPrincipal onClick={handleReestart}>Recomeçar</S.BotaoPrincipal>
    </S.ContainerRespostas>
    
  </S.ContainerTotal>
  )
}

export default GameOver