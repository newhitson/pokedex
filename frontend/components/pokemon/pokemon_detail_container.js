import {connect} from 'react-redux';
import { requestAllPokemon, requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = state => {
  const pokes = state.pokemon.entities[state.pokemon.currentPoke];
  return {pokemon: pokes,
  errors: state.errors
};};

const mapDispatchtoProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchtoProps)(PokemonDetail);
