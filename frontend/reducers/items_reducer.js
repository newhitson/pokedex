import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const defaultState = [];

const itemReducer = (state = defaultState, action) =>{
  // debugger;
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon.item;
    default:
      return state;
  }
};

export default itemReducer;
