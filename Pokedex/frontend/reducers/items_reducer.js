import { RECEIVE_POKEMON } from '../actions/pokemon_actions'; 

const itemsReducer = (state = {}, action) => {
  Object.freeze(state); 

  let nextState = Object.assign({}, state); 

  switch(action.type) {
    case RECEIVE_POKEMON:
      let items = action.payload.items;
      nextState = Object.assign(nextState, items);
      return nextState;  
    default: 
      return state; 
  }
}; 

export default itemsReducer; 