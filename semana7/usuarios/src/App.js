import React from 'react';
import './App.css';
import ContainerSalvar from './Components/ContainerSalvar/ContainerSalvar'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <button>Ir para a página de lista</button>
        <ContainerSalvar/>
      </div>
      
    )
  }
}
  
export default App;