
import React from 'react';
import { Link, Route } from 'react-router-dom';
import PokemonDetail from './pokemon_detail';

class PokemonIndexItem extends React.Component {

  render (){

    const { pokemon } = this.props;

    return (

      <li>
        <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
        

        <img src={this.props.pokemon.image_url} height="42" width="42"/>
      </li>
    );
  }
}

export default PokemonIndexItem;
