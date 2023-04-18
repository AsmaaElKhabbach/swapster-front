// == Import
import './carousel.scss';
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getLatestBookAdded } from '../../../api/books';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// == Component
function LastestAdd() {
const books = useSelector((state) => state.books.latestBooksAdded);
console.log(books)

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getLatestBookAdded());
}, []);

  return (
<div className='lastestadd'>
      <h1>Dernier ajout de livre</h1>
      {books.map((book) => (
        <Card key={book.id}>
        <Card.Img variant="top" src={`${book.cover_page}`} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Catégorie : {book.category}</ListGroup.Item>
          <ListGroup.Item>ISBN : {book.isbn_13}</ListGroup.Item>
          <ListGroup.Item>Auteur : {book.name}</ListGroup.Item>
          <ListGroup.Item>Editeur : {book.editor}</ListGroup.Item>
          <ListGroup.Item>Format : {book.width} x H{book.height}</ListGroup.Item>
          <ListGroup.Item><Button>Voir les donneurs</Button></ListGroup.Item>
        </ListGroup>
        </Card>
      ))}
    </div>
  );
}

// == Export
export default LastestAdd;
