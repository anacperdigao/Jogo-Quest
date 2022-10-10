import React from 'react';
import MenuLateral from '../../Components/MenuLateral/index.jsx';
import Botao from '../../Components/Botao';

import * as S from "./style.js"


function Cards() {
  return (
    <S.Cards>
        <S.ContainerTotal>

            <S.ContainerEsquerdaPerguntas>
                <S.Titulo>Pergunta 1</S.Titulo>
            </S.ContainerEsquerdaPerguntas>

            <S.ContainerQuantPerguntas>
                <label>Resposta 1</label>
                <input type='radio'></input>

                <label>Resposta 2</label>
                <input type='radio'></input>
                
                <label>Resposta 3</label>
                <input type='radio'></input>
                    
                <Botao texto = "Começar" />
            </S.ContainerQuantPerguntas>
            
            <MenuLateral />

        </S.ContainerTotal>
    </S.Cards>
  );
}

export default Cards;