// == Import
import './latestadd.scss';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLatestBookAdded, getUsersGivenBooksHome } from '../../../api/books';

import EmailTo from '../../EmailTo';

// == Component
function LatestAdd() {
  const dispatch = useDispatch();

  // au chargement de la page au récupère les derniers ajout de livre
  useEffect(() => {
    dispatch(getLatestBookAdded());
  }, []);

  // on récupère les livre qui ont été ajouter dans le state
  const books = useSelector((state) => state.books.latestBooksAdded);
  const bookId = books.map((book) => (book.id));

  // on créer une variable dans le state qui permet de gèrer l'affcihage de la modal
  const [showUsers, setShowUsers] = useState(false);

  // Fonction qui permet de gérer la fermeture de la modal
  const handleCloseUsers = () => setShowUsers(false);

  // Fonction qui permet de gérer l'affichage de la modal users
  const handleShowUsers = () => {
    setShowUsers(true);
    dispatch(getUsersGivenBooksHome());
  };

  // grace au hook de react-redux on recupère les données concernant les users qui donnent un livre
  const booksGiver = useSelector((state) => state.books.booksGivenByUsers);

  return (
    <div className="latestadd">
      <div className="latestadd-title">
        <h1>Dernier ajout de livre</h1>
      </div>
      <div className="latestadd-item">
        {books.map((book) => (
          <Card className="book" key={book.id}>
            <Card.Img className="book-img" variant="top" src={`${book.cover_page}`} />
            <Card.Body className="book-body">
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Catégorie : {book.category}</ListGroup.Item>
              <ListGroup.Item>ISBN : {book.isbn_13}</ListGroup.Item>
              <ListGroup.Item>Auteur : {book.author}</ListGroup.Item>
              <ListGroup.Item>Editeur : {book.editor}</ListGroup.Item>
              <ListGroup.Item>Format : {book.width} x H{book.height}</ListGroup.Item>
              <ListGroup.Item><Button onClick={handleShowUsers}>Voir les donneurs</Button></ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </div>
      <Modal size="lg" show={showUsers} onHide={handleCloseUsers}>
        <Modal.Header closeButton>
          <Modal.Title>Liste des utilisateurs qui cèdent le livre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table className="givers" size="sm" striped bordered hover>
            <thead>
              <tr>
                <th>UserName</th>
                <th>Etat</th>
                <th>Ville</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {booksGiver.map((giver) => (
                <tr key={giver.email}>
                  <td>{giver.name}</td>
                  <td>{giver.status}</td>
                  <td>{giver.city}</td>
                  <td> <EmailTo label="Envoyer un message" mailto={`mailto:${giver.email}`} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseUsers}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// == Export
export default LatestAdd;
