// == Import 

import axios from 'axios';
import { axiosInstance } from './axiosInstance';
import { saveMyBooksList } from "../store/reducers/mybooks";

// == Middlewares 

// Fonction pour récupérer les livres à donner de l'utilisateur
export const getMyBookList = () => {
  return async (dispatch, getState) => {
    const state= getState()

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
  };
};

// Fonction qui permet de supprimer un livre de la liste à donné de l'utilisateur
export const deleteMyBook = () => {
  return async (dispatch, getState) => {
    const state= getState();

    const bookId = state.mybooks.myBooksList.map((book) => (book.id));

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
  };
};

  // /book/:bookId/my
