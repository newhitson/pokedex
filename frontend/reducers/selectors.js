// import {values} from 'lodash';

const selectAllPokemon = ({ pokemon }) => {
  console.log(pokemon);
  return Object.values(pokemon.entities);
};
export default selectAllPokemon;




// const initialState = getState();
// selectAllPokemon(initialState); //=> []
//
// dispatch(requestAllPokemon());
//
// const populatedState = getState();
// selectAllPokemon(populatedState); //=> array of pokemon objects!
