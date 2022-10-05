import React from 'react';
import ContainerEsquerda from '../ContainerEsquerda/index.jsx';
import * as S from "./style.js"

const ContainerGeral = () => {
    return(
        <S.ContainerTotal>
            <ContainerEsquerda />
            <section className='container__direita-respostas'></section>
            <section className='container__auxiliar'></section>
        </S.ContainerTotal>
    )
};

export default ContainerGeral;