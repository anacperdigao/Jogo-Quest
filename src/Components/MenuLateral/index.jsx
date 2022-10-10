import React from 'react';
import * as S from "./style.js"
import {Link} from 'react-router-dom';

const MenuLateral = () => {
    return(
        <S.IconesAuxiliares>

            <Link to={'/'}>
                <S.HomeIcon />
            </Link>

            <S.ReportAnalyticsIcon />

        </S.IconesAuxiliares>
    )
};

export default MenuLateral;