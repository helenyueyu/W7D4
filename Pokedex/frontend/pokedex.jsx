import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store';

import { RECEIVE_ALL_POKEMON } from './actions/pokemon_actions'; 
import { fetchAllPokemon } from './util/api_util'; 

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root'); 
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  ReactDOM.render(<h1>Pokedex</h1>, root); 
})

window.fetchAllPokemon = fetchAllPokemon; 




