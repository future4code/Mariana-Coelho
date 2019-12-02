import React from 'react';
import './App.css';
import InputDeTexto from './components/InputDeTexto/InputDeTexto'
import styled from 'styled-components';

const ButtonPadding = styled.p`
  padding: 5px;
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tela: "primeira-tela",
    };
  }

  botaoProxima1 = () => {
    this.setState({ tela: "segunda-tela" });
  };

  botaoProxima2 = () => {
    this.setState({ tela: "terceira-tela" });
  };

  botaoProxima3 = () => {
    this.setState({ tela: "quarta-tela" });
  };


  render() {
    let tela;
    switch (this.state.tela) {
      case "primeira-tela":
        tela = (
          <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <InputDeTexto pergunta="1. Qual o seu nome?"/>
            <InputDeTexto pergunta="2. Qual a sua idade?"/>
            <InputDeTexto pergunta="3. Qual o seu e-mail?"/>

            <div>
              <p>Qual a sua escolaridade?</p>
              <select>
                <option>Ensino médio incompleto</option>,
                <option>Ensino médio completo</option>,
                <option>Ensino superior incompleto</option>,
                <option>Ensino superior completo</option>
              </select>
              </div>

            <ButtonPadding><button onClick={this.botaoProxima1}>Próxima etapa</button></ButtonPadding>
          </div>
        );
        break;

      case "segunda-tela":
        tela = (
          <div>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <InputDeTexto pergunta="1. Qual curso?"/>
            <InputDeTexto pergunta="2. Qual a unidade de ensino?"/>
            <ButtonPadding><button onClick={this.botaoProxima2}>Próxima etapa</button></ButtonPadding>
          </div>
        );
        break;

      case "terceira-tela":
        tela = (
          <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <InputDeTexto pergunta="5. Por que você não terminou um curso de graduação?"/>
              <div>
                <p>Você fez algum curso complementar?</p>
                <select>
                  <option>Nenhum</option>,
                  <option>Curso técnico</option>,
                  <option>Curso de inglês</option>,
                </select>
              </div>
              <ButtonPadding><button onClick={this.botaoProxima3}>Próxima etapa</button></ButtonPadding>
          </div>
        );
        break;

      case "quarta-tela":
        tela = (
          <div>
            <h3>O FORMULÁRIO ACABOU</h3>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
          </div>
        );
          break;
    }

    return (
      <div className="App">
        <h1>FutureForm</h1>
        {tela}
      </div>
    );
  }
}

export default App;


