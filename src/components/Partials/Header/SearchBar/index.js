import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar() {
  const handleChangeSearch = (event) => {
    const newValue = event.target.value;
    // J'emet mon intention de modifier le newSearch
    dispatch(changeNewSearch(newValue));
  };
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="danger">Search</Button>
      </Form>
    </div>
  );
}

export default
SearchBar;
