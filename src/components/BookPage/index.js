// == Import
import './bookpage.scss'
import Footer from "../Partials/Footer"
import Header from "../Partials/Header"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import EmailTo from '../EmailTo';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import {useParams, Navigate} from 'react-router-dom';
import { findBook } from '../../store/selectors/books';

// == Component
function BookPage() {
  const [show, setShow] = useState(false);
  // Fonction qui permet de gérer la fermeture de la modal
  const handleClose = () => setShow(false);
  // Fonction qui permet de gérer l'affichage de la modal
  const handleShow = () => setShow(true);
  // Fonction qui permet d'ajouter un livre aux livre à donnés
  const handleAdd = () => {};

  const params = useParams();
  const book = useSelector((state) => findBook(state.books.search.searchResults, params.id));
    console.log(book);

  if(!book) {
     return <Navigate to="/error" replace />
   }

  return (
    <div>
      <Header />
      <main>
      <Card className="book">
        <Card.Img variant="top" src="https://images2.medimops.eu/product/cd0774/M02072730848-large.jpg" />
        <Card.Body>
          <Card.Title>Le Petit Prince</Card.Title>
          <Card.Text>
            Résumé du livre
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Catégorie</ListGroup.Item>
          <ListGroup.Item>Auteur</ListGroup.Item>
          <ListGroup.Item>Editeur</ListGroup.Item>
          <ListGroup.Item>Format</ListGroup.Item>
          <ListGroup.Item>Date de publication</ListGroup.Item>
          <ListGroup.Item>Langue</ListGroup.Item>
          <ListGroup.Item>Nombre de pages</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Button onClick={handleShow}>Donner le livre</Button>
        </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
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
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>

    <Table className='givers' size= "lg" striped bordered hover>
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
      </main>
      <Footer />
    </div>
  )
}

// == Export
export default BookPage
