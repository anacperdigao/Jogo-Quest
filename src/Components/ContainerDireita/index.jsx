import React, { useState } from 'react';
import Botao from '../Botao/index.jsx';
import * as S from "./style.js"

const ContainerDireita = () => {
    
    const [aoClicarQuantidade, setAoClicarQuantidade] = useState(true);

    return(
        <>
            {aoClicarQuantidade 
            ? 
            <S.ContainerQuantPerguntas>    
                <Botao onClick = {aoClicarQuantidade} texto = "2" />
                <Botao onClick = {aoClicarQuantidade} texto = "5" />
                <Botao onClick = {aoClicarQuantidade} texto = "10" />
            </S.ContainerQuantPerguntas>
            :
            <S.ContainerComecar>
                <Botao texto = "START" />
                <Botao texto = "CANCEL" />
            </S.ContainerComecar>
        }
        </>
    )
};

export default ContainerDireita;