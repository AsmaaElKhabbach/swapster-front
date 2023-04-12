// == Import 
import './searchBar.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { changeNewSearch } from '../../../../store/reducers/books'
import { getBook } from '../../../../api/books';

// == Component
function SearchBar() {
  // on récupère le hook react-redux qui nous permet de modifier nos données et on le stock dans une variable 
  const dispatch = useDispatch();

  // grace au hook react-redux on récupère la donnée qui correspond a la valeur de la barre de recherche
  const search = useSelector((state) => state.search);

  // Fonction qui permet de changer la valeur de l'input rechercher
  const handleInputChange = (event) => {
    // on récupère la donnée entré par l'utilisateur dans la barre de recherche
    const newValue = event.target.value;
    // J'emet mon intention de modifier le newSearch
    dispatch(changeNewSearch(newValue));
  };

  // Fonction qui permet de gérer la soumission du formulaire de recherche
  const handleSubmit = (event) => {
    // on stop le comportement par défaut de rechargement de la page
    event.preventDefault();
    // on émet l'intention de modifier grace à l'action récupérer dans le réducer home de modifié l'input
    dispatch(getBook());
  }

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
        <Button variant="danger">Rechercher</Button>
      </Form>

    </div>
  );
}

// == Export
export default SearchBar;
