import React from 'react';
import './InputDeTexto.css';

function InputDeTexto(props) {
  return (
    <div className="Input-texto">
    <p>{props.pergunta}</p>
        <input/>
    </div>
  );
}

export default InputDeTexto;
