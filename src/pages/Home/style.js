import styled from "styled-components";
import { azulEscuro, azulEsverdeado, cinzaClaro, rosa } from '../../Components/UI/variaveis';


export const Home = styled.div`
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