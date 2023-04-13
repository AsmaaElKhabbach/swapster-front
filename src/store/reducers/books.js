//== Import
import { createAction, createReducer } from '@reduxjs/toolkit';

// == State
const initialState = {
  search: "",

};

//== Action
// action qui permet changer l'input de recherche
export const changeNewSearch = createAction('books/changeNewSearch');

// == Reducer
const booksReducer = createReducer(initialState, (builder) => {
  builder 
  .addCase(changeNewSearch, (state, { payload }) => {
    state.search = payload;
  })
   
});

// == Export
export default booksReducer;
