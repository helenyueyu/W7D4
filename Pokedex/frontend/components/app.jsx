import React from 'react'; 
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './item/item_detail_container';
import { Route } from 'react-router-dom';


const App = () => (
  <div> 
    <Route path="/pokemon/:pokemonId/items/:itemId"
      component = {ItemDetailContainer} />
    <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
    <Route path="/" component={PokemonIndexContainer} />
  </div> 
)


export default App; 