import styled from "styled-components";
import { azulEscuro, azulEsverdeado, branco, cinzaClaro, rosa } from "../UI/variaveis";
import { FaHome } from "react-icons/fa"


export const ContainerTotal = styled.main`
    background-color: white;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 40% 50% 10%;
    border: 7px solid ${azulEscuro};

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
        grid-template-rows: 40% 50% 10%;
    }
`;

export const ContainerPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const Titulo = styled.h1`
    font-size: 34px;
    color: ${azulEsverdeado};
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 28px;
    }
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

export const HomeIcon = styled(FaHome)`
    color: ${azulEscuro};
    font-size: 35px;
    display: flex;
    align-self: center;
    justify-self: center;
    cursor: pointer;

    :hover{
        transform: scale(1.1)
    }
`