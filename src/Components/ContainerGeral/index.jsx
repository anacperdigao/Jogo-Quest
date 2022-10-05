import React from 'react';
import ContainerDireita from '../ContainerDireita/index.jsx';
import ContainerEsquerda from '../ContainerEsquerda/index.jsx';
import * as S from "./style.js"

const ContainerGeral = () => {
    return(
        <S.ContainerTotal>
            <ContainerEsquerda />
            <ContainerDireita />
            <section className='container__auxiliar'></section>
        </S.ContainerTotal>
    )
};

export default ContainerGeral;