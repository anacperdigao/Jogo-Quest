import React from 'react';

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
                <S.BotaoPrincipal>Apagar</S.BotaoPrincipal>
            </S.ContainerRespostas>

        </S.ContainerTotal>
    </S.Tentativas>
  );
}

export default Tentativas;