// import {values} from 'lodash';

export const selectAllPokemon = ({ pokemon }) => {
  return Object.values(pokemon.entities);
};

export const selectPokemonItem = (state, itemID) => {
  return Object.values(state.items.itemID);
};




// const initialState = getState();
// selectAllPokemon(initialState); //=> []
//
// dispatch(requestAllPokemon());
//
// const populatedState = getState();
// selectAllPokemon(populatedState); //=> array of pokemon objects!
