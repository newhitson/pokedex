import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const defaultState = {
  entities: {},
  currentPoke: null
};

const pokemonReducer = (state = defaultState, action) =>{
  // debugger;
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ALL_POKEMON:
    console.log(action.pokemon);
      return Object.assign({}, state, {entities: action.pokemon});
    case RECEIVE_SINGLE_POKEMON:
      let newState = Object.assign({}, state);
      newState.entities[action.pokemon.poke.id] = action.pokemon.poke;
      newState.currentPoke = action.pokemon.poke.id;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
