import React from 'react';
import logo from './logo.svg';
import './App.css';
import SquareCard from './components/SquareCard/SquareCard'

function App() {
  return (
    <div className="App">
      <SquareCard titulo="future4.br" imagem="http://portaldocat.com.br/gatos/wp-content/uploads/2015/04/gatos-estrabismo-saude.jpg"/>
      <SquareCard titulo="future4.br" imagem="https://couvesdebruxelas.files.wordpress.com/2009/03/gato.jpg?w=300&h=244"/>
      <SquareCard titulo="future4.br" imagem="https://www.catconworldwide.com/wp-content/uploads/2017/06/Ruth-M_FB.jpg"/>
    </div>
  );
}

export default App;
