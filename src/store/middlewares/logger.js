// == Middleware
const loggerMiddleware = (store) => (next) => async (action) => {
  // console.log('Je suis dans le middleware logger');
  // console.log(action);

  store.getState();
  // store.dispatch();

  next(action);
};

// == Export
export default loggerMiddleware;
