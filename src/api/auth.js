// == Import
import axios from 'axios'
import { setError, setIsLoading, saveUser, signUpRequest, signUpFailed, signUpSuccess } from '../store/reducers/settings';
import { axiosInstance } from './axiosInstance';

// == Middlewares
export const login = (email, password, callback) => {
  return async (dispatch, getState) => {
  try {
    const state = getState();
    dispatch(setIsLoading(true));
    const response = await axiosInstance.post('/login', {
      email,
      password
    });
    console.log(response.data);
    
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
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
  return async (dispatch) => {
    dispatch(signUpRequest());

    try {
      const response = await axiosInstance.post("/signup", userData);
      dispatch(signUpSuccess (response.data));

    } catch (error) {
      dispatch(signUpFailed(error.message));
    }
  };
};




