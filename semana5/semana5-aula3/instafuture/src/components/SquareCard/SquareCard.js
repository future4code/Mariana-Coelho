import React from 'react';
import './SquareCard.css';
import { tsImportEqualsDeclaration } from '@babel/types';

class SquareCard extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="Main-Container">
                <p className="titulo">
                    {this.props.titulo}
                </p>
                <div id="imagem">
                    <img className="imagemdopost" src={this.props.imagem}/>
                </div>
                <div id="icones">
                    <p>
                        <img className="hearticon" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-heart-thin.png"/>
                    </p>

                    <p>
                        <img className="commenticon" src="https://cdn1.iconfinder.com/data/icons/business-office-and-internet-3-4/48/102-512.png"/>
                    </p>
                </div>
            </div>
        )
    }
}

export default SquareCard;
