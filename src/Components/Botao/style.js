import styled from 'styled-components';
import { rosa } from '../UI/variaveis';


export const BotaoPrincipal = styled.button`
    padding: 10px;
    background-color: ${rosa};
    border: none;
    width: 5em;
    height: 3em;
    color: white;
    border-radius: 20px;
    font-size: 25px;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        transform: scale(1.1);
    }
`;

