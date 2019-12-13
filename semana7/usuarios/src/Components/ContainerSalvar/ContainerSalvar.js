import React from 'react';
import Containersalvar from './ContainerSalvar.css'


class ContainerSalvar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="Container">
        <p>Nome</p>
        <input></input>
        <p>E-mail</p>
        <input></input>
        <p><button>Salvar</button></p>
      </div>
    )
  }
}
  
export default ContainerSalvar;