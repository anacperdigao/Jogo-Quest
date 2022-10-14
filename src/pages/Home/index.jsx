import React, { useState } from 'react';
import MenuLateral from '../../Components/MenuLateral';
import Botao from '../../Components/Botao';
import BotaoSecundario from '../../Components/BotaoSecundario';
import * as S from "./style.js";
import { Link } from "react-router-dom";


function Home() {

  const [aoComecar, setAoComecar] = useState(true);


//----- Aqui é o botao de start que eu devo armazenar o numero de questoes do input 
  const handleStart = () => {
    setAoComecar(false);
    setNumeroDeQuestoes(numeroDeQuestoes) //------ Aqui foi onde de fato eu armazenei o input em numeroDeQuestoes
  };


//----- Aqui é o botao cancel que eu apago o armazenamento do input e volto a tela  
  const handleCancel = () => {
    setAoComecar(true);
}; 


//----- Aqui é o input onde o usuario digita o numero de questoes
  const [numeroDeQuestoes, setNumeroDeQuestoes] = useState();

  const handleChange = (evento) => {
    setNumeroDeQuestoes(evento.target.value)
  }
  
  
  return (
      <S.Home>
        <S.ContainerTotal>

          {aoComecar
          ?
          <>
            <S.ContainerEsquerdaPerguntas>
              <S.Titulo>Quantas perguntas você deseja responder?</S.Titulo>
            </S.ContainerEsquerdaPerguntas>

            <S.ContainerQuantPerguntas>
                <S.InputQuantidade onChange={handleChange} placeholder='Ex.: 5' type='number'  />   
                <Botao onClick = {handleStart} texto = "Começar" />
            </S.ContainerQuantPerguntas>
          </>
          :
          <>
            <S.ContainerEsquerdaPerguntas>
                <S.Titulo>Oba! Você digitou {numeroDeQuestoes} questões. Podemos continuar?</S.Titulo>
            </S.ContainerEsquerdaPerguntas>

            <S.ContainerQuantPerguntas>
                <Link 
                  to = {'/cards'}
                  state = {{numeroDeQuestoes: numeroDeQuestoes}}
                > 
                  <Botao texto = "Sim" />
                </Link>
                <BotaoSecundario onClick = {handleCancel} texto = "Não" />
            </S.ContainerQuantPerguntas>
          </>
          }

          <MenuLateral />

        </S.ContainerTotal>

      </S.Home>
  )
};

export default Home;