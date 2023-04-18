//== Import
import { createAction, createReducer } from '@reduxjs/toolkit';

// == State
const initialState = {
  userSearch: '',
  search: {
    searchResults: [],
    error: null,
    isLoading: false,
  },

  myBooks: [],
};

//== Action
// action qui permet changer l'input de recherche
export const changeNewSearch = createAction('books/changeNewSearch');
// actionn qui permet de sauvegardé le résultat de la recherche
export const saveBooks = createAction('books/saveBooks');
// action qui permet de gérer le chargement des données venant de l'api
export const setIsLoading = createAction('books/setIsLoading');
// action qui permet de gérer les erreurs de connexion
export const setError = createAction('books/setError');
//
export const saveMyBooks = createAction('books/saveMyBooks');

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
    .addCase(saveMyBooks, (state, { payload }) => {
      state.myBooks = payload;
    });
});

// == Export
export default booksReducer;
