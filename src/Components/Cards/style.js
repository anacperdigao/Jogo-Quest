import styled from "styled-components";
import { azulEscuro, azulEsverdeado, branco, cinzaClaro, rosa } from "../../Components/UI/variaveis";


export const Cards = styled.div`
    background-color: #F78672;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerTotal = styled.main`
    background-color: white;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 40% 50% 10%;
    border: 7px solid ${azulEscuro}
`;

export const ContainerPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const Titulo = styled.h1`
    font-size: 24px;
    color: ${azulEsverdeado};
    text-align: center;
`;

export const ContainerRespostas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: ${cinzaClaro};
    gap: 30px;
`;

export const OpcoesRespostas = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border: none;
    margin: 30px 0px;

`

export const Opcoes = styled.p`
    padding: 10px;
    border: none;
    width: 350px;
    height: 2em;
    border-radius: 20px;
    font-size: 14px;
    background-color: ${branco};
    color: ${rosa};    
    border: none; 
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 5px;
`
export const BotaoPrincipal = styled.button`
    padding: 10px;
    border: none;
    width: 6em;
    height: 2em;
    border-radius: 20px;
    font-size: 25px;
    background-color: ${rosa};
    color: ${branco};    
    border: none; 
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;

    :hover{
        opacity: 0.9;
        transform: scale(1.1);
    }
`;