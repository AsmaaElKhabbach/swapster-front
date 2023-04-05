// == Import 

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeNewSearch } from '../../../../store/reducers/home'
import { getBook } from '../../../../api/books';

// == Component
function SearchBar() {
  
  const search = useSelector((state) => state.home.search);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    // J'emet mon intention de modifier le newSearch
    dispatch(changeNewSearch(newValue));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
