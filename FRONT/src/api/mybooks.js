// == Import 

import axios from 'axios';
import { axiosInstance } from './axiosInstance';
import { setIsLoading, setError, saveMyBooksList } from "../store/reducers/mybooks";

// == Middlewares 

// Fonction pour récupérer les livres à donner de l'utilisateur
export const getMyBookList = () => {
  return async (dispatch, getState) => {
    const state= getState()

    dispatch(setIsLoading(true))
    try {
         // appel api à l'application back pour récupérer les livres à donner
         const response = await axiosInstance.get('/book/my')
         console.log(response)
        // modification de l'action de succès pour s'inscrire
        dispatch(saveMyBooksList(response.data));
  
    }catch(axios){
      dispatch(setError(axios.response))
      alert('Aucun livre dans la liste')
    }
    finally{
      dispatch(setIsLoading(false))
    }
  };
};

export const deleteBook = (bookId) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(setIsLoading(true));

    const { token } = state.settings.user.token;
    console.log(token)

    try {
      const response = await axiosInstance.delete(`/book/${bookId}/my`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
      return response.data
    } catch (error) {
      dispatch(setError(error.response));
      // alert('Erreur lors de la suppression du livre');
    } finally {
      dispatch(setIsLoading(false));
    }
};  
};

