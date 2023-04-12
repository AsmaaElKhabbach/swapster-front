// == Import
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './reducers/books';
import loggerMiddleware from './middlewares/logger';
import settingsReducer from './reducers/settings';

// == Store
const store = configureStore({
  reducer: {
    home: booksReducer,
    settings: settingsReducer,
  },
  // on rajoute un middleware qui va permettre la connexion d'un utilisateur
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(loggerMiddleware),
});

// == Export
export default store;
