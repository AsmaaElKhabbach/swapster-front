//= = Import
import { createAction, createReducer } from '@reduxjs/toolkit';

// == State
const initialState = {
 myBooksList:[],
 error:null,
 isLoading:false,
 myGivedBooksList:[],
};

//== Action

// action qui permet de gérer le chargement des données venant de l'api
export const setIsLoading = createAction('books/setIsLoading');

// action qui permet de gérer les erreurs
export const setError = createAction('books/setError');

// action qui permet de sauvegarder la liste de livre à donner de l'utilisateur
export const saveMyBooksList= createAction('mybooks/saveMyBooksList');

// action qui permet de sauvegarder la liste de livre déjà donnés de l'utilisateur
export const saveMyGivedBooksList= createAction('mybooks/saveMyGivedBooksList');

// action qui permet d'ajouter un livre a la liste des livres donnés
export const addBooktoMyList = createAction('mybooks/addBooktoMyList');

export const giveBookSuccess = createAction('/mybooks/giveBookSuccess')

// == Reducer
const mybooksReducer = createReducer(initialState, (builder) => {
  builder 
  .addCase(saveMyBooksList, (state, { payload }) => {
    state.myBooksList = payload;
  })

  .addCase(saveMyGivedBooksList, (state, { payload }) => {
    state.myGivedBooksList = payload;
  })

  .addCase(addBooktoMyList, (state, { payload }) => {
    state.myGivedBooksList = state.myGivedBooksList.concat(payload);
  })

  .addCase(giveBookSuccess, (state, { payload }) => {
    state.myBooksList = state.myBooksList.filter((book) => book.id !== payload.id);
    state.myGivedBooksList = state.myGivedBooksList.concat(payload);
  });
});

// == Export
export default mybooksReducer;
