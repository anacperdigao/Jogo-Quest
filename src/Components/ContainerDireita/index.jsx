import React from 'react';
import Botao from '../Botao/index.jsx';
import * as S from "./style.js"

const ContainerDireita = () => {
    return(
        <S.ContainerDireitaPerguntas>
            <Botao texto = "2" />
            <Botao texto = "5" />
            <Botao texto = "10" />
        </S.ContainerDireitaPerguntas>
    )
};

export default ContainerDireita;