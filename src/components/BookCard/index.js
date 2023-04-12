// == Import 
import './card.scss'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// == Component
function BookCard() {
  return (
    <>
        <Card className='book'>
          <Card.Img variant="top" src="https://images2.medimops.eu/product/cd0774/M02072730848-large.jpg" />
          <Card.Body>
            <Card.Title>Le Petit Prince</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>ISBN</ListGroup.Item>
              <ListGroup.Item>Auteur</ListGroup.Item>
              <ListGroup.Item>Editeur</ListGroup.Item>
              <ListGroup.Item>Format</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" href='/book/bookid'>Voir en détails</Button>
          </Card.Body>
        </Card>
    </>
  )
}

// == Export
export default BookCard
