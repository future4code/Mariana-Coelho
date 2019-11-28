import React from 'react'
import './BigCard.css' 

function Img(props) {
    return (<img src={props.imagem}/>)
}

function BigCard(props) {
    return(
        <div className="Bigcard">     
            <p>
                <strong>{props.nome}</strong>
            </p>

            <div className="Grid-img-descricao">
                <p className="Imagem"><Img imagem={"../../imagens/fotocoelho.png"}/></p>
                <p>
                    {props.descricao}
                </p>
            </div>
        </div>
    )
}

export default BigCard;