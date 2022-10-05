import styled from 'styled-components';
import { cinzaClaro } from '../UI/variaveis';


export const ContainerQuantPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: ${cinzaClaro};
    gap: 30px;
`;

export const ContainerComecar = styled(ContainerQuantPerguntas)`
`;