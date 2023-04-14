// == Import 
import './card.scss'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import EmailTo from '../EmailTo';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { useState } from 'react';



// == Component
function BookCard({id, cover_page, title, resume, Category, publication_date, isbn_13, Author, editor, height, width, language, pages_number}) {

  const book = useSelector((state) => state.books.search.searchResults);
  const [showAdd, setShowAdd] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  // Fonction qui permet de gérer la fermeture de la modal
  const handleCloseAdd = () => setShowAdd(false);

  const handleCloseUsers = () => setShowUsers(false);

  // Fonction qui permet de gérer l'affichage de la modal add
  const handleShowAdd = () => setShowAdd(true);

  // Fonction qui permet de gérer l'affichage de la modal add
  const handleShowUsers = () => setShowUsers(true);

  // Fonction qui permet d'ajouter un livre aux livre à donnés
  const handleAdd = () => {};

  return (
    <>
      <Card className="book">
        <Card.Img variant="top" src={`${cover_page}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Résumé : {resume}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Catégorie : {Category}</ListGroup.Item>
          <ListGroup.Item>ISBN : {isbn_13}</ListGroup.Item>
          <ListGroup.Item>Auteur : {Author}</ListGroup.Item>
          <ListGroup.Item>Editeur : {editor}</ListGroup.Item>
          <ListGroup.Item>Format : {width} x H{height}</ListGroup.Item>
          <ListGroup.Item>Date de publication : {publication_date}</ListGroup.Item>
          <ListGroup.Item>Langue : {language}</ListGroup.Item>
          <ListGroup.Item>Nombre de page : {pages_number}</ListGroup.Item>
        </ListGroup>
        <Card.Body className='card-btn'>
        <Button onClick={handleShowAdd}>Donner le livre</Button>
        <Button onClick={handleShowUsers}>Voir les donneurs</Button>
        </Card.Body>
    </Card>

    <Modal size="lg" show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter à ses livres à donner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3">
        <Form.Label>Etat du livre</Form.Label>
        <Form.Select>
          <option>Comme neuf</option>
          <option>Bon</option>
          <option>Acceptable</option>
        </Form.Select>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseAdd}>
            Close
          </Button>
          <Button onClick={handleAdd}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>   

        <Modal size="lg" show={showUsers} onHide={handleCloseUsers}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter à ses livres à donner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table className='givers' size= "sm" striped bordered hover>
            <thead>
              <tr>
                  <th>UserName</th>
                  <th>Etat</th>
                  <th>Ville</th>
                  <th>Contact</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Bon</td>
                <td>Paris</td>
                <td> <EmailTo label="Envoyer un message" mailto="mailto:john@gmail.com" /> </td>
              </tr>
              <tr>
              <td>John</td>
                <td>Bon</td>
                <td>Paris</td>
                <td> <EmailTo label="Envoyer un message" mailto="mailto:john@gmail.com" /> </td>
              </tr>
              <tr>
              <td>John</td>
                <td>Bon</td>
                <td>Paris</td>
                <td> <EmailTo label="Envoyer un message" mailto="mailto:john@gmail.com" /> </td>
              </tr>
              <tr>
                <td>John</td>
                <td>Bon</td>
                <td>Paris</td>
                <td> <EmailTo label="Envoyer un message" mailto="mailto:john@gmail.com" /> </td>
              </tr>
            </tbody>
     </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseUsers}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>   
      </>
  )
}

// == Export
export default BookCard

// == Proptypes
BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  cover_page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
  isbn_13: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  editor: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};
