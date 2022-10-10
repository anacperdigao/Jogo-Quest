import React from 'react';
import MenuLateral from '../MenuLateral/index.jsx';
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

            <MenuLateral />
        </S.ContainerTotal>
    )
};

export default ContainerGeral;