import React from 'react'; 
import PokemonIndexItem from './pokemon_index_item'

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {  
    return (
      <div>
        <h1>Hello</h1>
        <ul>
          {this.props.pokemon && this.props.pokemon.map(
            pokemon => <li key={pokemon.id}><PokemonIndexItem 
            pokemon ={pokemon}/> </li>
          )}
        </ul>
      </div> 
    )
  }
}


export default PokemonIndex; 