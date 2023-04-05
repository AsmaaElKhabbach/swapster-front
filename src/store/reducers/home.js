//== Import
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  search: "",

};

//== Action
export const changeNewSearch = createAction('home/changeNewSearch');

// == Reducer
const homeReducer = createReducer(initialState, (builder) => {
  builder 
  .addCase(changeNewSearch, (state, action) => {
    state.search = action.payload;
  })
   
});

// == Export
export default homeReducer;
