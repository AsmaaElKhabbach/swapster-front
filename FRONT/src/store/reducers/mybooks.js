//== Import
import { createAction, createReducer } from '@reduxjs/toolkit';

// == State
const initialState = {
 myBooksList:[],
};

//== Action

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
