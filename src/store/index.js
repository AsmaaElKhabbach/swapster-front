// == Import
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/home';
import loggerMiddleware from './middlewares/logger';
import settingsReducer from './reducers/settings';

// == Store
const store = configureStore({
  reducer: {
    home: homeReducer,
    settings: settingsReducer,
  },
  // Je vais rajouter un middleware logger
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(loggerMiddleware),
});

// == Export
export default store;
