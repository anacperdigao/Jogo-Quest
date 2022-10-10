import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { TbReportAnalytics } from "react-icons/tb"
import { azulEscuro } from "../UI/variaveis";


export const IconesAuxiliares = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
    gap: 30px;
`

export const HomeIcon = styled(FaHome)`
    color: ${azulEscuro};
    font-size: 24px;
    cursor: pointer;

    :hover{
        transform: scale(1.1)
    }
`


export const ReportAnalyticsIcon = styled(TbReportAnalytics)`
    color: ${azulEscuro};
    font-size: 24px;
    cursor: pointer;

    :hover{
        transform: scale(1.1)
    }
`
