import * as S from "./style.js"

const BotaoSecundario = (props) => {

    return(
        <S.BotaoSecundario onClick={props.onClick}>{props.texto}</S.BotaoSecundario>
    )
};

export default BotaoSecundario;