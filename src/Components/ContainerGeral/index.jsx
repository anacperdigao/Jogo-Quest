import React from 'react';
import * as S from "./style.js"

const ContainerGeral = () => {
    return(
        <S.ContainerTotal>
            <section className='container__esquerda-perguntas'></section>
            <section className='container__direita-respostas'></section>
            <section className='container__auxiliar'></section>
        </S.ContainerTotal>
    )
};

export default ContainerGeral;