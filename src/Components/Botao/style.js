import styled from 'styled-components';
import { rosa, branco } from '../UI/variaveis';


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