// == Import 
import './card.scss'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types'

// == Component
function BookCard({cover_page, title, Category, isbn_13, author, editor, height, width}) {
  return (
    <>
        <Card className='book'>
          <Card.Img variant="top" src={`${cover_page}`} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Catégorie: {Category}</ListGroup.Item>
              <ListGroup.Item>ISBN : {isbn_13}</ListGroup.Item>
              <ListGroup.Item>Auteur: {author}</ListGroup.Item>
              <ListGroup.Item>Editeur: {editor}</ListGroup.Item>
              <ListGroup.Item> Format : {width} x H {height}</ListGroup.Item>
            </ListGroup>
            <Button href='/book/:bookid'>Voir en détails</Button>
          </Card.Body>
        </Card>
    </>
  )
}

// == Export
export default BookCard

// == Proptypes
BookCard.propTypes = {
  cover_page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
  isbn_13: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  editor: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
