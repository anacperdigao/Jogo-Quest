import React from 'react';
import MenuLateral from '../../Components/MenuLateral/index.jsx';
import Botao from '../../Components/Botao';

import * as S from "./style.js"


function Tentativas() {
  return (
    <S.Tentativas>
        <S.ContainerTotal>

            <S.ContainerPerguntas>
                <S.Titulo>Tentativas Anteriores</S.Titulo>
            </S.ContainerPerguntas>

            <S.ContainerRespostas>
                <p>Tentativa 1</p>
                <Botao texto = "Apagar" />
            </S.ContainerRespostas>
            
            <MenuLateral />

        </S.ContainerTotal>
    </S.Tentativas>
  );
}

export default Tentativas;