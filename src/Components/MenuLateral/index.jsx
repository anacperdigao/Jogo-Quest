import React from 'react';
import * as S from "./style.js"
import {Link} from 'react-router-dom';

const MenuLateral = () => {
    return(
        <S.IconesAuxiliares>

            <Link to={'/'}>
                <S.HomeIcon />
            </Link>

            <Link to={'/tentativas'}>
                <S.ReportAnalyticsIcon />
            </Link>
            
        </S.IconesAuxiliares>
    )
};

export default MenuLateral;