import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
      <div className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
        <Route path={`/pokemon/:pokemonId`} component={PokemonDetailContainer} />
      </div>

    );
  }
}

export default PokemonIndex;
