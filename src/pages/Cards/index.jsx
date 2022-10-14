import React, { useEffect, useState } from 'react';
import MenuLateral from '../../Components/MenuLateral/index.jsx';
import Botao from '../../Components/Botao';
import api from '../../api/api';
import * as S from "./style.js"
import { useLocation } from 'react-router-dom';


function Cards() {

//----- Aqui eu recuperei a variável com o números de questões   
    const { state } = useLocation()
    const numeroDeQuestoes = state.numeroDeQuestoes
    console.log(numeroDeQuestoes)

//----- Aqui vou consumir a API
    const [dadosApi, setDadosApi] = useState();

    useEffect(() => {
        api
            .get(`/api.php?amount=${numeroDeQuestoes}&type=multiple`)
            .then((response) => setDadosApi(response.data.results[0]))           
    }, []);

 

  return (
    <S.Cards>
        <S.ContainerTotal>

            <S.ContainerPerguntas>
                <S.Titulo>{dadosApi?.question}</S.Titulo>
            </S.ContainerPerguntas>

            <S.ContainerRespostas>
                <S.OpcoesRespostas>
                    <S.LabelOpcoes for='resposta1'><input id='resposta1' type='radio' name='resposta'></input>{dadosApi?.incorrect_answers[0]}</S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta2'><input id='resposta2' type='radio' name='resposta'></input>{dadosApi?.incorrect_answers[1]}</S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta3'><input id='resposta3' type='radio' name='resposta'></input>{dadosApi?.incorrect_answers[2]}</S.LabelOpcoes>
                    <S.LabelOpcoes for='resposta4'><input id='resposta4' type='radio' name='resposta'></input>{dadosApi?.correct_answer}</S.LabelOpcoes>
                </S.OpcoesRespostas>

                <Botao texto = "Próxima >" />
            </S.ContainerRespostas>
            
            <MenuLateral />

        </S.ContainerTotal>
    </S.Cards>
  );
}

export default Cards;

/*

 */