import React from 'react';
import ContainerAuxiliar from '../MenuFixo/index.jsx';
import Botao from '../Botao'
import * as S from "./style.js"

const ContainerGeral = () => {
    return(
        <S.ContainerTotal>
            <S.ContainerEsquerdaPerguntas>
                <S.Titulo>Quantas perguntas você deseja responder?</S.Titulo>
            </S.ContainerEsquerdaPerguntas>

            <S.ContainerQuantPerguntas>    
                <Botao texto = "2" />
                <Botao texto = "5" />
                <Botao texto = "10" />
            </S.ContainerQuantPerguntas>

            <ContainerAuxiliar />
        </S.ContainerTotal>
    )
};

export default ContainerGeral;