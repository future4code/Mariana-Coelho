import React from 'react';
import './App.css';
import axios from 'axios';

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playlistName: ''
    }
  }

  sendData = () => {
    const dataToSend = {
      name: this.state.name
    }
  }

  const request = axios.post(`${baseURL}/playlists/createPlaylist`, dataToSend, {
        headers: {
      'Content-Type': 'apllication/json',
      'auth': 'nome'
    }
  })

  request.then((response => {
    window.alert('dados enviados')
  }).catch((error => {
    window.alert('houve um erro!')
  });



  componentDidMount() {

  }

  onNewPlaylistNameChange(event) {
    this.setState({ playlistName: event.target.value})
  }

  render () {
    return (
     <div>   
        <input type="text" onChange={this.onNewPlaylistNameChange}
        placeholder="Nome da playlist"
        value={this.state.playlistName}
        />
        <button >Criar playlist</button>
        <hr/>

      </div>
      
    )
  }
  
}

export default App;
