import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  padding: 5px;
`

function App() {
  return (
    <div className="App">
        <h1>Lista de Tarefas</h1>
        <input></input>
        <button>Adicionar</button>
        <p>Filtro 
          <select>
            <option value="nenhum">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select></p>
    </div>
  );
}

export default App;
