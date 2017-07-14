import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import { requestSinglePokemon } from './actions/pokemon_actions';
import { fetchSinglePokemon } from './util/api_util';
// QUESTION:  why import this here

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.requestSinglePokemon = requestSinglePokemon;
  window.fetchSinglePokemon = fetchSinglePokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
