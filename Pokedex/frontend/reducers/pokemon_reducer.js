import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions'


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state); 

  let nextState = Object.assign({}, state); 

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = Object.assign(action.pokemon, nextState);
      return nextState;
    case RECEIVE_POKEMON:
      let pokemon = action.payload.pokemon;
      
      nextState[pokemon.id] = pokemon;
      return nextState;
    default: 
      return state;
  } 
}; 

export default pokemonReducer; 