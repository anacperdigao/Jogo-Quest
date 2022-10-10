import React from 'react';
import MenuLateral from '../../Components/MenuLateral/index.jsx';
import Botao from '../../Components/Botao';

import * as S from "./style.js"


function Cards() {
  return (
    <S.Cards>
        <S.ContainerTotal>

            <S.ContainerPerguntas>
                <S.Titulo>Pergunta 1</S.Titulo>
            </S.ContainerPerguntas>

            <S.ContainerRespostas>
                <S.OpcoesRespostas>
                    <S.LabelOpcoes for='resposta1'><input id='resposta1' type='radio' name='resposta'></input>Resposta 1</S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta2'><input id='resposta2' type='radio' name='resposta'></input>Resposta 2</S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta3'><input id='resposta3' type='radio' name='resposta'></input>Resposta 3</S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta4'><input id='resposta4' type='radio' name='resposta'></input>Resposta 3</S.LabelOpcoes>
                </S.OpcoesRespostas>

                <Botao texto = "Próxima >" />
            </S.ContainerRespostas>
            
            <MenuLateral />

        </S.ContainerTotal>
    </S.Cards>
  );
}

export default Cards;