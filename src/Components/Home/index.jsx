import React, { useContext, useState } from 'react';
import { QuizContext } from '../../context/quiz.js';
import * as S from "./style.js";


function Home() {

  const [aoComecar, setAoComecar] = useState(true);

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
              type='number' 
              value={numeroDeQuestoes} 
            />
            {numeroDeQuestoes <= 0 
            ? <S.BotaoPrincipal>...</S.BotaoPrincipal>
            : <S.BotaoPrincipal onClick = {() => setAoComecar(false)}>Começar</S.BotaoPrincipal>
            }   
            
        </S.ContainerQuantPerguntas>
      </>
      :
      <>
        <S.ContainerEsquerdaPerguntas>
            <S.Titulo>Oba!<br/> Você digitou {numeroDeQuestoes} questões. Podemos continuar?</S.Titulo>
        </S.ContainerEsquerdaPerguntas>

        <S.ContainerQuantPerguntas>
            <S.BotaoPrincipal onClick={() => setGameStages(stages[1])}>Sim</S.BotaoPrincipal>
            <S.BotaoSecundario onClick = {handleCancel}>Não</S.BotaoSecundario>
        </S.ContainerQuantPerguntas>
      </>
      }

    </S.ContainerTotal>

  )
};

export default Home;