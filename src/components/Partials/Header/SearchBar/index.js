import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.scss'
function SearchBar() {
  const handleChangeSearch = (event) => {
    const newValue = event.target.value;
    // J'emet mon intention de modifier le newSearch
    dispatch(changeNewSearch(newValue));
  };
  return (
<<<<<<< HEAD
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
=======
    <div className="search">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
             aria-label="Search"
          />
           <Button variant="danger">Search</Button>
         </Form>
>>>>>>> c5eca925526a51a1c5cf20bf7396b8860c0e6533
    </div>
  );
}

export default
SearchBar;
