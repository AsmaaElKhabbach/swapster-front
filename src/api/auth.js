// == Import
import axios from 'axios'

// == Middlewares
// getState me permettra de récupérer le state global de redux
// dispatch me permettra d'emettre des actions / intentions
export const login = () => async (dispatch, getState) => {
  const state = getState();
  const { data } = await axios.post('', {
    email: state.settings.credentials.email,
    password: state.settings.credentials.password,
  });
};
