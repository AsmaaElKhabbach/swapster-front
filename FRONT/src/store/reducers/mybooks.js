//== Import
import { createAction, createReducer } from '@reduxjs/toolkit';

// == State
const initialState = {
 myBooksList:[],
 error:null,
 isLoading:false,
};

//== Action

// action qui permet de gérer le chargement des données venant de l'api
export const setIsLoading = createAction('books/setIsLoading');

// action qui permet de gérer les erreurs
export const setError = createAction('books/setError');

// action qui permet de sauvegarder la liste de livre à donner de l'utilisateur
export const saveMyBooksList= createAction('mybooks/saveMyBooksList');

// == Reducer
const mybooksReducer = createReducer(initialState, (builder) => {
  builder 
  .addCase(saveMyBooksList, (state, { payload }) => {
    state.myBooksList = payload;
  })
});

// == Export
export default mybooksReducer;
