import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = props => (
  <Link to={`/pokemon/${props.pokemon.id}`}>

    {props.pokemon.name}
    <img width='150px' height='150px' src={props.pokemon.image_url} alt={props.pokemon.name}/>

  </Link>
)

export default PokemonIndexItem;