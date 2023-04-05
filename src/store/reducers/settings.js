//== Import
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  credentials: {
    email: '',
    password: 'Yeahmen',
  },

};

//== Action
export const changeCredentialsValue = createAction('settings/changeCredentialsValue');

// == Reducer
const settingsReducer = createReducer(initialState, (builder) => {
  builder 
  .addCase(changeCredentialsValue, (state, action) => {
    // le dispatch ressemble à
    // dispatch(changeCredentialsValue({
    //   value: 'Ma valeur',
    //   name: 'email',
    // }));
    // payload ressemble à ça => {value: 'Ma valeur', name: 'email'}
    // state.credentials.email === state.credentials['email']

    const { value, name } = action.payload;
    // name sera soit 'email' soit 'password'
    state.credentials[name] = value;
  });

});

// == Export
export default settingsReducer;
