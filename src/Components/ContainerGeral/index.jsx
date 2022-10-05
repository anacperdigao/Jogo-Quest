import React from 'react';
import ContainerAuxiliar from '../ContainerAuxiliar/index.jsx';
import ContainerDireita from '../ContainerDireita/index.jsx';
import ContainerEsquerda from '../ContainerEsquerda/index.jsx';
import * as S from "./style.js"

const ContainerGeral = () => {
    return(
        <S.ContainerTotal>
            <ContainerEsquerda />
            <ContainerDireita />
            <ContainerAuxiliar />
        </S.ContainerTotal>
    )
};

export default ContainerGeral;