import * as S from "./style.js"

const Botao = (props) => {

    return(
        <S.BotaoPrincipal onClick={props.onClick}>{props.texto}</S.BotaoPrincipal>
    )
};

export default Botao;