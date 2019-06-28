import { connect } from 'react-redux'; 

import * as Selectors from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions'; 

import PokemonDetail from './pokemon_detail'; 

const mapStateToProps = (state, ownProps) => ({
  // items: Selectors.selectAllItems(state)
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
}); 

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestSinglePokemon: () => 
      dispatch(requestSinglePokemon(ownProps.match.params.pokemonId))
}); 

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PokemonDetail); 