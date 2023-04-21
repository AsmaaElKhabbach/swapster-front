// == Import
import './profile.scss';
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  MDBCol,
  MDBContainer,
  MDBRow, MDBCard,
  MDBCardText, MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import Header from '../Partials/Header/index';
import Footer from '../Partials/Footer/index';
import Modal from './modifyModal/index';
import { deleteUserAccount } from '../../api/auth';
import { logout } from '../../store/reducers/settings';
import {
  deleteBook, getMyBookList, getMyGivedBookList, giveBook,
} from '../../api/mybooks';

// == Component
function UserPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector((state) => state.settings.user.data.name);
  const usercity = useSelector((state) => state.settings.user.data.city);
  const usermail = useSelector((state) => state.settings.user.data.email);
  const isLoggedIn = useSelector((state) => state.settings.isLoggedIn);
  const myBooks = useSelector((state) => state.mybooks.myBooksList);
  const myGivedBooks = useSelector((state) => state.mybooks.myGivedBooksList);

  const [numBooks, setNumBooks] = useState(myBooks.length);

  useEffect(() => {
    dispatch(getMyBookList());
  }, [dispatch]);

  useEffect(() => {
    setNumBooks(myBooks.length);
  }, [myBooks]);

  // fonction de suppression de compte
  const handleDeleteUserAccount = (event) => {
    event.preventDefault();
    dispatch(deleteUserAccount());
    dispatch(logout());
    navigate('/', { replace: true });
  };

  // Fonction pour récupérer la liste des livres à donner
  const handleGetBooks = (event) => {
    event.preventDefault();
    dispatch(getMyBookList());
  };

  // Fonction de suppression d'un livre
  const handleDeleteBook = async (bookId) => {
    await dispatch(deleteBook(bookId));
    dispatch(getMyBookList());
  };

  // Fonction pour récupérer la liste des livres donnés
  const handleGetGivedBooks = (event) => {
    event.preventDefault();
    dispatch(getMyGivedBookList());
  };

  // Fonction de basculement de statut du livre "à donner " à "donné"
  const handleGiveBook = async (bookId) => {
    await dispatch(giveBook(bookId));
    dispatch(getMyBookList());
  };

  return (
    <>
      <Header />
      <main className="mjboot">
        <section
          className="vh-100"
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="6" className="mb-4 mb-lg-0 container">
                <MDBCard
                  className="mb-3"
                  style={{
                    backgroundColor: 'rgba(255, 160, 122, 0.5',
                    borderRadius: '.5rem',
                    width: '100%',
                  }}
                >
                  <MDBRow className="g-0">
                    <MDBCol
                      md="4"
                      className="gradient-custom text-center text-white"
                      style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', height: '50%' }}
                    >
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="Avatar"
                        className="my-5"
                        style={{
                          // width: '200px',
                        }}
                        fluid
                      />
                      <MDBTypography
                        tag="h5"
                        style={{
                          color: '#500000',
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        <div className="user">
                          {isLoggedIn && (
                          <Nav.Link href="/profile" className="nav-link"> {username}</Nav.Link>
                          )}
                          {!isLoggedIn && (
                          <>
                            Pseudo
                          </>
                          )}

                        </div>
                      </MDBTypography>
                      <MDBIcon far icon="edit mb-5" />
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody className="p-4">
                        <MDBTypography tag="h6">Informations</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Localisation</MDBTypography>
                            <MDBCardText className="texted">{usercity}</MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Livres à donner</MDBTypography>
                            <MDBCardText className="texted">{numBooks}</MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        <MDBTypography tag="h6" />
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Email</MDBTypography>
                            <MDBCardText className="texted">{usermail}</MDBCardText>
                            <span >
                              <button onClick={handleDeleteUserAccount} type="button" className="btn btn-primary">Supprimer mon compte</button>
                              <Modal />
                            </span>
                          </MDBCol>
                        </MDBRow>

                        {/* DEBUT DE LA PARTIE STATUT/DONNER DES LIVRES */}

                        <MDBContainer
                          breakpoint="lg"
                          style={{
                            display: 'block',
                            marginTop: '5em',
                            width: '100%',
                            borderRadius: '10px',
                          }}
                        >
                          <div>
                            <Accordion defaultActiveKey={[]} alwaysOpen>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header onClick={handleGetBooks}>
                                  Mes livres à donner
                                </Accordion.Header>
                                {myBooks.map((book) => (
                                  <Accordion.Body key={book.id} style={{ backgroundColor: '#f5f0e6' }}>
                                    <main className="cardBody">
                                      <div className="bookItem">
                                        <h5>
                                          {book.title}
                                        </h5>
                                        <img
                                          className='cardImage'
                                          src={book.cover_page}
                                          alt={`couverture du livre ${book.title}`}
                                        />
                                        <p>{book.author}</p>
                                        <p>{book.editor}</p>
                                        <p>{`Format : ${book.width} x H${book.height}`}</p>
                                        <button className="btn btn-primary" type="button" onClick={() => handleGiveBook(book.book_id)}>J'ai donné mon livre </button>
                                        <button className="btn btn-primary" type="button" onClick={() => handleDeleteBook(book.book_id)}>Je ne souhaite plus donner mon livre</button>
                                      </div>
                                    </main>
                                  </Accordion.Body>
                                ))}
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                <Accordion.Header onClick={handleGetGivedBooks}>
                                  Livres donnés
                                </Accordion.Header>
                                {myGivedBooks.map((book) => (
                                  <Accordion.Body key={book.id} style={{ backgroundColor: '#f5f0e6' }}>
                                    <main className="cardBody">
                                      <div className="bookItem">
                                        <h5>
                                          {book.title}
                                        </h5>
                                        <img
                                          className='cardImage'
                                          src={book.cover_page}
                                          alt={`couverture du livre ${book.title}`}
                                        />
                                        <p>{book.author}</p>
                                        <p>{book.editor}</p>
                                        <p>{`Format : ${book.width} x H${book.height}`}</p>
                                      </div>
                                    </main>
                                  </Accordion.Body>
                                ))}
                              </Accordion.Item>

                            </Accordion>
                          </div>
                        </MDBContainer>

                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Export
export default UserPage;
