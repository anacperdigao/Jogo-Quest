import styled from 'styled-components';
import { azulEscuro, cinzaClaro } from '../UI/variaveis';

export const ContainerTotal = styled.main`
    background-color: ${cinzaClaro};
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 40% 50% 10%;
    border: 7px solid ${azulEscuro}
`;