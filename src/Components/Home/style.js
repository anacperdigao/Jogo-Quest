import styled from "styled-components";
import { azulEscuro, azulEsverdeado, branco, cinzaClaro, rosa } from '../UI/variaveis';
import { TbReportAnalytics } from "react-icons/tb"


export const ContainerTotal = styled.div`
    background-color: white;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 40% 50% 10%;
    border: 7px solid ${azulEscuro};
`;

export const ContainerEsquerdaPerguntas = styled.div`
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
`;

export const ContainerQuantPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: ${cinzaClaro};
    gap: 30px;
`;

export const InputQuantidade = styled.input`
    padding: 10px 10px 10px 25px;
    border: none;
    width: 6em;
    height: 2em;
    border-radius: 20px;
    font-size: 25px;
    outline-color: ${rosa};
    color: ${azulEscuro};
    text-align: center;
    cursor: pointer;
    
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

export const BotaoSecundario = styled.button`
    padding: 10px;
    border: none;
    width: 6em;
    height: 2em;
    border-radius: 20px;
    font-size: 25px;
    background-color: ${cinzaClaro};
    color: ${rosa};    
    border: 3px solid ${rosa};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        transform: scale(1.1);
    }
`;

export const ReportAnalyticsIcon = styled(TbReportAnalytics)`
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