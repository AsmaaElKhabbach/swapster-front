// == Import
import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from './middlewares/logger';
import booksReducer from './reducers/books';
import settingsReducer from './reducers/settings';

// == Store
const store = configureStore({
  reducer: {
    books: booksReducer,
    settings: settingsReducer,
  },
  // on rajoute un middleware qui va permettre la connexion d'un utilisateur
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(loggerMiddleware),
});

// == Export
export default store;
