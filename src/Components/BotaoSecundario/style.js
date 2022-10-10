import styled from 'styled-components';
import { cinzaClaro, rosa } from '../UI/variaveis';


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