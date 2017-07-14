
import React from 'react';
import { Link } from 'react-router-dom';
// import { requestSinglePokemon } from '../../actions/pokemon_actions';

class PokemonDetail extends React.Component {

  constructor(props){
    super(props);

  }
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
        this.props.requestSinglePokemon(newProps.match.params.pokemonId);
      }
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  render (){

    const { pokemon } = this.props;

    return (
      this.props.pokemon ? <div>
        <img src={this.props.pokemon.image_url}/>
        <br></br>
        <ul>
          <li>{this.props.pokemon.name}</li>
          <li>{this.props.pokemon.poke_type}</li>
          <li>{this.props.pokemon.attack}</li>
          <li>{this.props.pokemon.defense}</li>
          <li>{this.props.pokemon.moves}</li>
        </ul>
      </div> : <h1>"loading page"</h1>

    );
  }
}

export default PokemonDetail;
