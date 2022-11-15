import styled from "styled-components";
import { azulEscuro, azulEsverdeado, bege, branco, cinzaClaro, rosa } from "../../Components/UI/variaveis";


export const ContainerTotal = styled.main`
    background-color: white;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 40% 50% 10%;
    border: 7px solid ${azulEscuro};
    box-sizing: border-box;
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
    color: ${azulEscuro};
    text-align: center;
`;

export const ContainerRespostas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: ${cinzaClaro};
    gap: 30px
`;

export const Paragrafo = styled.p`
    font-size: 24px;
    color: ${azulEsverdeado};
    font-weight: bold;
    text-align: center;
`

export const OpcoesRespostas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: none;
    margin: 20px 0px;

`

export const Opcoes = styled.p`
    padding: 15px;
    border: none;
    width: 350px;
    height: 3.5em;
    border-radius: 20px;
    font-size: 14px;
    background-color: ${branco};
    color: ${rosa};    
    border: none; 
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    :hover{
        background-color: ${bege};
        color: ${azulEscuro};
        font-weight: bold;
    }
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

export const Imagem = styled.img`
    width: 50%;
    height: 50%;

`