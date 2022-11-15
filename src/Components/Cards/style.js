import styled from "styled-components";
import { azulEscuro, azulEsverdeado, bege, branco, cinzaClaro, laranja, rosa } from "../../Components/UI/variaveis";
import { FaChevronRight } from "react-icons/fa"


export const ContainerTotal = styled.main`
    background-color: white;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 40% 50% 10%;
    border: 7px solid ${azulEscuro};
    box-sizing: border-box;

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
        grid-template-rows: 30% 60% 10%;
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
    font-size: 24px;
    color: ${azulEsverdeado};
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const ContainerRespostas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background-color: ${cinzaClaro};
    max-width: 100%;
`;

export const Paragrafo = styled.p`
    color: ${azulEsverdeado};
    font-weight: bold;
`

export const OpcoesRespostas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: none;
    margin: 20px 0px;
    width: 100%;

`

export const Opcoes = styled.p`
    padding: 15px;
    border: none;
    width: 100%;
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

&.correct{
    background-color: ${azulEsverdeado};
    color: ${branco}
}

&.incorrect{
    background-color: ${laranja};
    color: ${branco}
}

@media screen and (max-width: 480px){
        font-size: 12px;
        height: 4em;
    }
`


export const ChevronRightIcon = styled(FaChevronRight)`
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