// == Middleware

const loggerMiddleware = (store) => (next) => async (action) => {
  console.log('Je suis dans le middleware logger');
  console.log(action);

  store.getState();
  next(action);
};

// == Export
export default loggerMiddleware;
