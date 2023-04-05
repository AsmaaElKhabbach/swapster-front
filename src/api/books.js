// == Import
import axios from 'axios'

// == Middlewares
export const getBook = () => async (dispatch, getState) => {
    const state = getState();
    const { data } = await axios.get('https://openlibrary.org/works/OL15626917W.json')
    console.log(data)
};
