//== Import
import { createAction, createReducer } from '@reduxjs/toolkit';

// == State
const initialState = {
  userSearch:"",
  search:{
    searchResults:[],
    error: null,
    isLoading: false
  },

  booksGivenByUsers: [],
  listOfBookAddedToGive: [], 
};

//== Action

// action qui permet changer l'input de recherche
export const changeNewSearch = createAction('books/changeNewSearch');
// actionn qui permet de sauvegarder le résultat de la recherche 
export const saveBooks = createAction('books/saveBooks');
// action qui permet de gérer le chargement des données venant de l'api
export const setIsLoading = createAction('books/setIsLoading');
// action qui permet de gérer les erreurs de connexion
export const setError = createAction('books/setError');
// action qui permet de sauvegarder la liste des utilisateurs qui donnent un livre 
export const saveBooksGivenByUsers = createAction('books/saveBooksGivenByUsers');
// action qui permet de sauvegarder un livre a donné 
export const saveBooksToGivenBooksList  = createAction('books/saveBooksToGivenBooksList ');

// == Reducer
const booksReducer = createReducer(initialState, (builder) => {
  builder 
  .addCase(changeNewSearch, (state, { payload }) => {
    state.userSearch = payload;
  })
  .addCase(saveBooks, (state, { payload }) => {
    state.search.searchResults = payload;
    state.search.isLoading = true;
    state.search.error = payload;
  })
  .addCase(setIsLoading, (state, { payload }) => {
    state.search.isLoading = payload;
  })

  .addCase(setError, (state, { payload }) => {
    state.search.error = payload;
  })

  .addCase(saveBooksGivenByUsers, (state, { payload }) => {
    state.booksGivenByUsers = payload;
  })
  .addCase(saveBooksToGivenBooksList, (state, { payload }) => {
    state.listOfBookAddedToGive = state.listOfBookAddedToGive.concat(payload);
  })
});

// == Export
export default booksReducer;
