import {connect} from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';


const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state),
  errors: state.errors
});

const mapDispatchtoProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchtoProps)(pokemonIndex)
