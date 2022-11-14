import React, { useContext, useState } from 'react';
import { QuizContext } from '../../context/quiz.js';
import * as S from "./style.js";


function Home() {

  const [aoComecar, setAoComecar] = useState(true);

  const [quizState, dispatch, numeroDeQuestoes, setNumeroDeQuestoes] = useContext(QuizContext)

  const handleCancel = () => {
    setAoComecar(true)
    setNumeroDeQuestoes(0)
  }; 

  
  return (

    <S.ContainerTotal>

      {aoComecar
      ?
      <>
        <S.ContainerEsquerdaPerguntas>
          <S.Titulo>Quantas perguntas você deseja responder?</S.Titulo>
        </S.ContainerEsquerdaPerguntas>

        <S.ContainerQuantPerguntas>
            <S.InputQuantidade 
              onChange={e => setNumeroDeQuestoes(e.target.value)} 
              placeholder='Ex.: 5' 
              type='number' 
              value={numeroDeQuestoes} 
            />   
            <S.BotaoPrincipal onClick = {() => setAoComecar(false)}>Começar</S.BotaoPrincipal>
        </S.ContainerQuantPerguntas>
      </>
      :
      <>
        <S.ContainerEsquerdaPerguntas>
            <S.Titulo>Oba! Você digitou {numeroDeQuestoes} questões. Podemos continuar?</S.Titulo>
        </S.ContainerEsquerdaPerguntas>

        <S.ContainerQuantPerguntas>
            <S.BotaoPrincipal onClick={() => dispatch({type:'changeState'})}>Sim</S.BotaoPrincipal>
            <S.BotaoSecundario onClick = {handleCancel}>Não</S.BotaoSecundario>
        </S.ContainerQuantPerguntas>
      </>
      }

      <S.ReportAnalyticsIcon />

    </S.ContainerTotal>

  )
};

export default Home;