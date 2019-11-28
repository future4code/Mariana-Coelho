import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header>
        <div>
            FutureTube
        </div>

        <div>
            <input type="text" id="txtbusca" placeholder="Busca"></input>
        </div>
    </header>
        <div id="main-container">
            <section id="menu-lateral">
                <p>Início</p>
                <p>Em alta</p>
                <p>Inscrições</p>
                <p>Histórico</p>
                <p>Biblioteca</p>
            </section>

        <section id="grid-videos">
            <div class="grid-item">
                <a href="futurevideo1.html"><img src={require('./imagens/thumb1.png')}/></a>
                <p>A beleza da Irlanda</p>
            </div>

            <div class="grid-item">
                    <a href="futurevideo2.html"><img src={require('./imagens/thumb2.png')} width="100%" height="80%"></img></a>
                <p>Hemácias</p>
            </div>

            <div class="grid-item">
                    <img src={require('./imagens/thumb3.png')} width="100%" height="80%"></img>
                    <p>Tinta</p>
            </div>
            
            <div class="grid-item">
                    <img src={require('./imagens/thumb4.png')} width="100%" height="80%"></img>
                    <p>Praia</p>
            </div>

            <div class="grid-item">
                    <img src={require('./imagens/thumb5.png')} width="100%" height="80%"></img>
                    <p>Névoa</p>
            </div>
          
            <div class="grid-item">
                    <img src={require('./imagens/thumb6.png')} width="100%" height="80%"></img>
                    <p>Coelho</p>
            </div>

            <div class="grid-item">
                    <img src={require('./imagens/thumb7.png')}width="100%" height="80%"></img>
                    <p>Espaço</p>
            </div>
          
            <div class="grid-item">
                    <img src={require('./imagens/thumb8.png')} width="100%" height="80%"></img>
                    <p>Foguete</p>
            </div>
        </section>
      </div>  
    <footer>
        Oi! Eu moro no footer.
    </footer>
    </div>
  );
}

export default App;









