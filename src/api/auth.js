// == Import
import axios from 'axios'
import { setError, setIsLoading, saveUser, signUpRequest, signUpFailed, signUpSuccess } from '../store/reducers/settings';

// == Middlewares
export const login = (email, password, callback) => {
  return async (dispatch, getState) => {
  try {
    const state = getState();
    dispatch(setIsLoading(true));
    const response = await axios.post('https://swapster-back-production.up.railway.app/login', {
      email,
      password
    });
    console.log(response.data);
    
    dispatch(setIsLoading(false));
    dispatch(saveUser(response.data))
    callback();
  } catch (axios) {
    console.log(axios);
    dispatch(setError(axios.response.data))
    alert('error')
  }
}
};

export const signUp = (userData) => {
  return async (dispatch, getState) => {
    dispatch(signUpRequest());

    try {
      const response = await axios.post("https://swapster-back-production.up.railway.app/signup", userData);
      dispatch(signUpSuccess (response.data));

    } catch (error) {
      dispatch(signUpFailed(error.message));
    }
  };
};




