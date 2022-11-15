import React, { useContext } from 'react';
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
    }

    console.log(dadosApi[indice])
    const arrayAnswers = [...dadosApi[indice].incorrectAnswers, dadosApi[indice].correctAnswer]

    const handleOption = (evento) => {
        const opcaoMarcada = evento.target.innerHTML
        
        // Preciso travar pra pessoa nao pontuar mais de uma vez
        // if(respostaJaSelecionada){
        //     setScore(parseInt(score) + 0)
        // }

        if(opcaoMarcada === dadosApi[indice].correctAnswer){
            setScore(parseInt(score) + 1)
            setRespostaJaSelecionada(true)
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
                    {arrayAnswers
                    .sort(() => Math.random() - 0.5)
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

                <S.BotaoPrincipal onClick={handleNext}>Próxima</S.BotaoPrincipal>
            </S.ContainerRespostas>
            
        </S.ContainerTotal>
  );
}

export default Cards;

/*
{dadosApi?.question}
{dadosApi?.incorrect_answers[0]}
{dadosApi?.correct_answer}
 */