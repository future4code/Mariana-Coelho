import React from 'react';
import BigCard from './components/bigcard/BigCard'
import SmallCard from './components/SmallCard/SmallCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <BigCard nome="Mariana Coelho" descricao="Sou uma aluna da turma Bouman da Future 4."/>
      <SmallCard/>
      <SmallCard/>
    </div>
  );
}

export default App;
