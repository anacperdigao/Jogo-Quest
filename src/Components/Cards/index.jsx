import React, { useContext, useMemo } from 'react';
import * as S from "./style.js"
import { QuizContext } from '../../context/quiz';



function Cards() {

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


    const handleNext = () => {
        if(!dadosApi[indice+1]){
            setGameStages(stages[2])
        }
        setIndice(indice + 1)
        setRespostaJaSelecionada(false)
    }


    const arrayReordered = useMemo(
        () => [...dadosApi[indice].incorrectAnswers, dadosApi[indice].correctAnswer]
        .sort(() => Math.random() - 0.5), [dadosApi, indice])


    const handleOption = (evento) => {
        if(respostaJaSelecionada) return //travei para nao marcar toda vez que clicar

        const opcaoMarcada = evento.target.innerHTML
        setRespostaJaSelecionada(true)

        if(opcaoMarcada === dadosApi[indice].correctAnswer){
            setScore(parseInt(score) + 1)
        }
    }


  return (
        <S.ContainerTotal>
            
            <S.ContainerPerguntas>
                <S.Titulo>{dadosApi[indice]?.question}</S.Titulo>
            </S.ContainerPerguntas>

            <S.ContainerRespostas>
                <S.Paragrafo>Pergunta {indice + 1} de {parseInt(numeroDeQuestoes)}</S.Paragrafo>

                <S.OpcoesRespostas>
                    {arrayReordered
                    .map(opcao => 
                        <S.Opcoes 
                            className={` 
                                ${respostaJaSelecionada && opcao === dadosApi[indice].correctAnswer ? 'correct' : ''}
                                ${respostaJaSelecionada && opcao !== dadosApi[indice].correctAnswer ? 'incorrect' : ''}
                                `} 
                            onClick={handleOption}
                            key={opcao}>{opcao}
                        </S.Opcoes>
                    )}  
                </S.OpcoesRespostas>
            </S.ContainerRespostas>

            {respostaJaSelecionada && <S.ChevronRightIcon onClick={handleNext} />}
            
        </S.ContainerTotal>
  );
}

export default Cards;
