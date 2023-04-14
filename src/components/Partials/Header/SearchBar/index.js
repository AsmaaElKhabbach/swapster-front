// == Import 
import './searchBar.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { changeNewSearch } from '../../../../store/reducers/books'
import { axiosInstance } from '../../../../api/axiosInstance';
import { setError, saveBooks } from '../../../../store/reducers/books';
import { useEffect } from 'react';


// == Component
function SearchBar() {
  // on récupère le hook react-redux qui nous permet de modifier nos données et on le stock dans une variable 
  const dispatch = useDispatch();
  // on récupère le hook react-router-dom afin de rediriger l'utilisateur
  const navigate = useNavigate();

  // grace au hook react-redux on récupère la donnée qui correspond a la valeur de la barre de recherche
  const search = useSelector((state) => state.books.userSearch);

  // Fonction qui permet de changer la valeur de l'input rechercher
  const handleInputChange = (event) => {
    // on récupère la donnée entré par l'utilisateur dans la barre de recherche
    const newValue = event.target.value;
    // J'emet mon intention de modifier le newSearch
    dispatch(changeNewSearch(newValue));
  };

  // Fonction pour récupérer les livres rechercher 
  const getBook = () => {
  return async (dispatch) => {
    try {
       //  appel api à l'application back pour récupérer les livres une fois une recherche effectuée
       const response = await axiosInstance.get(`/book/search?query=${search}`)
       console.log(response)
      // modification de l'action de succès pour s'inscrire
      dispatch(saveBooks(response.data));

    }catch (axios) {
      console.log(axios);
      // on récupère l'erreur dans axios
      dispatch(setError(axios.response.data))
      alert('error')
    } 
  };
}

  // Fonction qui permet de gérer la soumission du formulaire de recherche
  const handleSubmit = (event) => {
    // on stop le comportement par défaut de rechargement de la page
    event.preventDefault();
    // on émet l'intention de modifier grace à l'action récupérer dans le réducer home de modifié l'input
    dispatch(getBook(search));
    console.log(search)
    navigate(`book/search/${search}`)
  }

  useEffect(() => {
    //Etape 3: Appeler l'API quand ma variable search est modifier
    getBook();
  }, [search]); 

  return (
    <div className='search'>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          value={search}
          onChange={handleInputChange}
          type="search"
          placeholder="Rechercher un livre"
          className="me-2"
          aria-label="Search"
        />
        <Button type= 'submit' variant="danger">Rechercher</Button>
      </Form>

    </div>
  );
}

// == Export
export default SearchBar;
