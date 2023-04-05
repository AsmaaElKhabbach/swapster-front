// == Import
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/home';
import loggerMiddleware from './middlewares/logger';

// == Store
const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  // Je vais rajouter un middleware logger
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(loggerMiddleware),
});

// == Export
export default store;
