import React from 'react';


class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon() 
  }
  // componentDidUpdate(prevProps) {
  //   if (this.props.pokemon.id !== prevProps.pokemon.id) {
  //     this.props.requestSinglePokemon(this.props.match.params.pokemonId); 
  //   }
  // }

  render() {
    if (this.props.pokemon === undefined) return null;

    return (
      <div>
        {this.props.pokemon.name}

        <img width='150px' height='150px' src={this.props.pokemon.image_url} alt={this.props.pokemon.name} />
      </div>
    )
  }
}


export default PokemonDetail;