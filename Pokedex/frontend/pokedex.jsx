import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors'; 

import Root from './components/root'; 

import { RECEIVE_ALL_POKEMON } from './actions/pokemon_actions'; 
import { RECEIVE_ITEMS } from './actions/items_actions'; 

import { fetchAllPokemon } from './util/api_util'; 

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root'); 
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon; 
  
  ReactDOM.render(<Root store={store}/>, root); 
})

window.fetchAllPokemon = fetchAllPokemon; 




