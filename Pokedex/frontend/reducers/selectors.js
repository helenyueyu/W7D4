export const selectAllPokemon = state => (
  Object.values(state.entities.pokemon)
); 

// export const selectAllItems = state => (
//   Object.values(state.entities.items)
// ); 

export const selectPokemonItem = (state, itemId) => (
  // Object.values(state.entities.items)[itemId];
  state.entities.items[itemId]
); 

// export default selectAllPokemon; 

