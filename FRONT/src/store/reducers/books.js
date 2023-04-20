//= = Import
import { createAction, createReducer } from '@reduxjs/toolkit';

// == State
const initialState = {
  userSearch: '',
  search: {
    searchResults: [],
    error: null,
    isLoading: false,
  },

<<<<<<< HEAD
  myBooks: [],
};

//= = Action
// action qui permet changer l'input de recherche
export const changeNewSearch = createAction('books/changeNewSearch');
// actionn qui permet de sauvegardé le résultat de la recherche
=======
  booksGivenByUsers: [],
  listOfBookAddedToGive: [],
  latestBooksAdded: [],
};

//= = Action

// action qui permet changer l'input de recherche
export const changeNewSearch = createAction('books/changeNewSearch');
// actionn qui permet de sauvegarder le résultat de la recherche
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
export const saveBooks = createAction('books/saveBooks');
// action qui permet de gérer le chargement des données venant de l'api
export const setIsLoading = createAction('books/setIsLoading');
// action qui permet de gérer les erreurs de connexion
export const setError = createAction('books/setError');
<<<<<<< HEAD
//
export const saveMyBooks = createAction('books/saveMyBooks');
=======
// action qui permet de sauvegarder la liste des utilisateurs qui donnent un livre
export const saveBooksGivenByUsers = createAction('books/saveBooksGivenByUsers');
// action qui permet de sauvegarder un livre a donné
export const saveBooksToGivenBooksList = createAction('books/saveBooksToGivenBooksList ');
// action qui permet de sauvegarder les derniers livres ajouter part les utilisateurs
export const saveLatestBookAdded = createAction('books/saveLatestBookAdded');
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88

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
<<<<<<< HEAD
    .addCase(saveMyBooks, (state, { payload }) => {
      state.myBooks = payload;
=======
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
    .addCase(saveLatestBookAdded, (state, { payload }) => {
      state.latestBooksAdded = state.latestBooksAdded.concat(payload);
>>>>>>> ec1610291d50a2555a141bb3f81007b6a3a93c88
    });
});

// == Export
export default booksReducer;
