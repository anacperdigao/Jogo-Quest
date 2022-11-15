import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import * as S from './style'


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
    setScore
] = useContext(QuizContext)


  const handleReestart = () => {
    setGameStages(stages[0])
    setNumeroDeQuestoes(0)
    setIndice(0)
    setDadosApi([])
  }


  return (
    <S.ContainerTotal>
    
    <S.ContainerPerguntas>
        <p>Imagem</p>
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