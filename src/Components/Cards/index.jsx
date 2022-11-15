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
        reorderAnswers
    ] = useContext(QuizContext)



    const handleNext = () => {

        if(!dadosApi[indice+1]){
            setGameStages(stages[2])
        }
        setIndice(indice + 1)
    }

    
    const arrayAnswers = [...dadosApi[indice].incorrectAnswers, dadosApi[indice].correctAnswer]



  return (
    <S.Cards>
        <S.ContainerTotal>
            
            <S.ContainerPerguntas>
                <S.Titulo>{dadosApi[indice]?.question}</S.Titulo>
            </S.ContainerPerguntas>

            <S.ContainerRespostas>
                <S.OpcoesRespostas>
                    {arrayAnswers
                    .sort(() => Math.random() - 0.5)
                    .map(opcao => <S.Opcoes key={opcao}>{opcao}</S.Opcoes>)}
                </S.OpcoesRespostas>

                <S.BotaoPrincipal onClick={handleNext}>Próxima</S.BotaoPrincipal>
            </S.ContainerRespostas>
            
        </S.ContainerTotal>
    </S.Cards>
  );
}

export default Cards;

/*
{dadosApi?.question}
{dadosApi?.incorrect_answers[0]}
{dadosApi?.correct_answer}
 */