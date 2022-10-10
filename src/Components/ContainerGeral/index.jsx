import React, { useState } from 'react';
import MenuLateral from '../MenuLateral/index.jsx';
import Botao from '../Botao';
import BotaoSecundario from '../BotaoSecundario';
import * as S from "./style.js";
import { Link } from "react-router-dom";


const ContainerGeral = ({principal}) => {

    const [aoComecar, setAoComecar] = useState(true);

    const aoClicarComecar = () => {
        setAoComecar(false);
      };

    const aoClicarNao = () => {
        setAoComecar(true);
    }; 
    
    
    return(

        <S.ContainerTotal>

            {aoComecar
            ?
            <>
                <S.ContainerEsquerdaPerguntas>
                    <S.Titulo>Quantas perguntas você deseja responder?</S.Titulo>
                </S.ContainerEsquerdaPerguntas>

                <S.ContainerQuantPerguntas>
                    <S.InputQuantidade placeholder='Ex.: 5' type='number'></S.InputQuantidade>    
                    <Botao onClick = {aoClicarComecar} texto = "Começar" />
                </S.ContainerQuantPerguntas>
            </>
            :
            <>
                <S.ContainerEsquerdaPerguntas>
                    <S.Titulo>Você tem certeza?</S.Titulo>
                </S.ContainerEsquerdaPerguntas>

                <S.ContainerQuantPerguntas>
                    <Link to={'/cards'}> 
                        <Botao texto = "Sim" />
                    </Link>
                    <BotaoSecundario onClick = {aoClicarNao} texto = "Não" />
                </S.ContainerQuantPerguntas>
            </>
            }

            <MenuLateral />
        </S.ContainerTotal>
    )
};

export default ContainerGeral;