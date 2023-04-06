// == Import
import axios from 'axios'
import { setError, setIsLoading, saveUser } from '../store/reducers/settings';

// == Middlewares
export const login = (email, password, callback) => {
  return async (dispatch, getState) => {
  try {
    const state = getState();
    dispatch(setIsLoading(true));
    const response = await axios.post('http://localhost:5000/login', {
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
