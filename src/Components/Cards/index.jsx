import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import * as S from "./style.js"
import { useLocation } from 'react-router-dom';


function Cards() {

//----- Aqui eu recuperei a variável com o números de questões da outra pagina  
    const { state } = useLocation()
    const numeroDeQuestoes = state.numeroDeQuestoes


//----- Aqui vou consumir a API
    const [dadosApi, setDadosApi] = useState([]);

    useEffect( () => {
        api
            .get(`/api/questions?limit=${numeroDeQuestoes}`)
            .then((response) => {
                console.log(response.data); 
                setDadosApi(response.data); 
            })
            .catch((erro) => {console.log(`Ops! Ocorreu um erro: ${erro}`)})
            console.log(dadosApi)

    }, []);


//----- Aqui vou formatar o texto que está vindo da API




//----- Aqui vou controlar o numero do indice que vai mudar com o clique do botao
    const [indice, setIndice] = useState(1);

    const handleNext = () => {

        if (indice <= (numeroDeQuestoes - 1)) {
            setIndice(indice + 1)
            //setDadosApi(dadosApi[indice])
            console.log(indice)           
        }
    }

  return (
    <S.Cards>
        <S.ContainerTotal>
            
            <S.ContainerPerguntas>
                <S.Titulo>question</S.Titulo>
            </S.ContainerPerguntas>

            <S.ContainerRespostas>
                <S.OpcoesRespostas>
                    <S.LabelOpcoes for='resposta1'><input id='resposta1' type='radio' name='resposta'></input></S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta2'><input id='resposta2' type='radio' name='resposta'></input></S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta3'><input id='resposta3' type='radio' name='resposta'></input></S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta4'><input id='resposta4' type='radio' name='resposta'></input></S.LabelOpcoes>
                </S.OpcoesRespostas>

                <S.BotaoPrincipal onClick = {handleNext}>Próxima</S.BotaoPrincipal>
            </S.ContainerRespostas>
            
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