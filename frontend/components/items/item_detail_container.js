import {connect} from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import { requestAllPokemon, requestSinglePokemon } from '../../actions/pokemon_actions';
import ItemDetail from './item_detail';


const mapStateToProps = (state, ownProps) => {
  const pokes = state.pokemon.entities[state.pokemon.currentPoke];
  return {item: ownProps.match.params.itemId,
  errors: state.errors
};};

const mapDispatchtoProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchtoProps)(ItemDetail);
