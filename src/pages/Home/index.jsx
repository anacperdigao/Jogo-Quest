import React, { useState } from 'react';
import MenuLateral from '../../Components/MenuLateral';
import Botao from '../../Components/Botao';
import BotaoSecundario from '../../Components/BotaoSecundario';
import * as S from "./style.js";
import { Link } from "react-router-dom";


function Home() {

  const [aoComecar, setAoComecar] = useState(true);

  const aoClicarComecar = () => {
      setAoComecar(false);
    };

  const aoClicarNao = () => {
      setAoComecar(true);
  }; 

  
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
                <S.InputQuantidade placeholder='Ex.: 5' type='number' />   
                <Botao onClick = {aoClicarComecar} texto = "Começar" />
            </S.ContainerQuantPerguntas>
          </>
          :
          <>
            <S.ContainerEsquerdaPerguntas>
                <S.Titulo>Você tem certeza?</S.Titulo>
            </S.ContainerEsquerdaPerguntas>

            <S.ContainerQuantPerguntas>
                <Link to={'/cards'}> 
                    <Botao texto = "Sim" />
                </Link>
                <BotaoSecundario onClick = {aoClicarNao} texto = "Não" />
            </S.ContainerQuantPerguntas>
          </>
          }

          <MenuLateral />

        </S.ContainerTotal>
        
      </S.Home>
  )
};

export default Home;