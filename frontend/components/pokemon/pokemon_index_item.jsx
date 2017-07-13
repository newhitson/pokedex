
import React from 'react';
import { Link } from 'react-router-dom';

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
