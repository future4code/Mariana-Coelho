import React from 'react';
import './HeartIcon.css';
import { tsImportEqualsDeclaration } from '@babel/types';

class HeartIcon extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="Main-Container">
                    <p>
                        <img className="hearticon" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-heart-thin.png"/>
                    </p>
            </div>
        )
    }
}

export default HeartIcon;