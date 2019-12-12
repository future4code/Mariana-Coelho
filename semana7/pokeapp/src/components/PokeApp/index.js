import React from 'react';
import axios from 'axios';
import index from './index.css'

const baseURL = 'http://pokeapi.co/api/v2' 

class PokeAPI extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allPokemons: [],
            allPokemonTypes: [],
            pokemonsSprites: []

        }
    }

    fetchAllPokemons = async () => {
        const response = await axios.get(`${baseURL}/pokemon?limit=151`)
        this.setState({ allPokemons: response.data.results })
    }

    allPokemonTypes = async () => {
        const response = await axios.get(`${baseURL}/type`)
        this.setState({ allPokemonTypes: response.data.results })
    }

    componentDidMount() {
        this.allPokemonTypes();
    }

    fetchPokemonFromType = async (event) => {
        const pokemonDetailsURL = event.target.value;
        const response = await axios.get(pokemonDetailsURL)
        this.setState({ allPokemons: response.data.pokemon })
        
    }

    render(){
        return(
        <div className="SelectorContainer">
        <h1>Pokémons de cada tipo</h1>
            <select className="PokemonSelector" onChange={this.fetchPokemonFromType}>
                <option>Selecione um tipo de Pokemon</option>
                {this.state.allPokemonTypes.map((type) => (<option value={type.url}>{type.name}</option>))}
            </select>

            <div className="PokemonDivs">
                {this.state.allPokemons.map((pokemon) => (<div className="PokemonDivsItem">{pokemon.pokemon.name}</div>))}
            </div>
        </div>
        )
    }

}

export default PokeAPI;