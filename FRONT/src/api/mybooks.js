// == Import 

import axios from 'axios';
import { axiosInstance } from './axiosInstance';
import { setIsLoading, setError, saveMyBooksList, saveMyGivedBooksList, addBooktoMyList } from "../store/reducers/mybooks";

// == Middlewares 

// Fonction pour récupérer les livres à donner de l'utilisateur
export const getMyBookList = (navigate) => {
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
      navigate('/profile')
    }
    finally{
      dispatch(setIsLoading(false))
    }
  };
};

// Fonction qui permet la supression d'un livre de la liste à donner 
export const deleteBook = (bookId) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(setIsLoading(true));

    const { token } = state.settings.user.token;
    console.log(token)

    try {
      const response = await axiosInstance.delete(`/book/${bookId}/my`, {
          availability: state.mybooks.myBooksList.availability,
      });
      console.log(response)
      return response.data
    } catch (error) {
      dispatch(setError(error.response));
      alert('Erreur lors de la suppression du livre');
    } finally {
      dispatch(setIsLoading(false));
    }
};  
};


// Fonction qui permet de récupérer la liste des livres déjà donnés 
export const getMyGivedBookList = () => {
  return async (dispatch, getState) => {
    const state= getState()

    dispatch(setIsLoading(true));

    try {
         // appel api à l'application back pour récupérer les livres à donner
         const response = await axiosInstance.get('/book/givenbook/my')
         console.log(response)
        // modification de l'action de succès pour s'inscrire
        dispatch(saveMyGivedBooksList(response.data));
  
    }catch(axios){
      console.log(axios)
      dispatch(setError(axios.response))
    }
    finally{
      dispatch(setIsLoading(false))
    }
  };
};

// Fonction qui permet d'ajouter un livre à la liste donné
export const giveBook = (bookId) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(setIsLoading(true));

    const { token } = state.settings.user.token;
    console.log(token)

    try {
      const response = await axiosInstance.patch(`/book/${bookId}/my`, {
        availability: "donné",
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Une fois que l'appel API est réussi, on peut mettre à jour la liste de livres donnés
      dispatch(addBooktoMyList(response.data));
      dispatch(giveBookSuccess());

    } catch (error) {
      dispatch(setError(error.response));
    } finally {
      dispatch(setIsLoading(false));
    }
  };  
};
