import React, { useEffect, useState } from 'react';
import MenuLateral from '../../Components/MenuLateral/index.jsx';
import Botao from '../../Components/Botao';
import api from '../../api/api';
import * as S from "./style.js"
import { useLocation } from 'react-router-dom';


function Cards() {

//----- Aqui eu recuperei a variável com o números de questões da outra pagina  
    const { state } = useLocation()
    const numeroDeQuestoes = state.numeroDeQuestoes


//----- Aqui vou consumir a API
    const [dadosApi, setDadosApi] = useState();

    useEffect(() => {
        api
            .get(`/api.php?amount=${numeroDeQuestoes}&type=multiple`)
            .then((response) => setDadosApi(response.data.results))       
    }, []);


//----- Aqui vou formatar o texto que está vindo da API



//----- Aqui vou controlar o numero do indice que vai mudar com o clique do botao
    const [indice, setIndice] = useState(1);

    const handleNext = () => {
        if (indice <= (numeroDeQuestoes - 1)) {
            setIndice(indice + 1)
            //setDadosApi(dadosApi[indice])
            console.log(dadosApi[indice])            
        }
    }


  return (
    <S.Cards>
        <S.ContainerTotal>
            
            <S.ContainerPerguntas>
                <S.Titulo>{dadosApi?.question}</S.Titulo>
            </S.ContainerPerguntas>

            <S.ContainerRespostas>
                <S.OpcoesRespostas>
                    <S.LabelOpcoes for='resposta1'><input id='resposta1' type='radio' name='resposta'></input></S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta2'><input id='resposta2' type='radio' name='resposta'></input></S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta3'><input id='resposta3' type='radio' name='resposta'></input></S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta4'><input id='resposta4' type='radio' name='resposta'></input></S.LabelOpcoes>
                </S.OpcoesRespostas>

                <Botao onClick = {handleNext} texto = "Próxima >" />
            </S.ContainerRespostas>
            
            <MenuLateral />

        </S.ContainerTotal>
    </S.Cards>
  );
}

export default Cards;

/*
{dadosApi?.question}
{dadosApi?.incorrect_answers[0]}
{dadosApi?.correct_answer}
 */