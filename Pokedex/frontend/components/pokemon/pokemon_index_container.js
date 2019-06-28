import { connect } from 'react-redux'; 
import * as Selectors from '../../reducers/selectors'; 
import { requestAllPokemon } from '../../actions/pokemon_actions'; 
  
import PokemonIndex from './pokemon_index'; 


const mapStateToProps = state => ({
  pokemon: Selectors.selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps 
)(PokemonIndex); 