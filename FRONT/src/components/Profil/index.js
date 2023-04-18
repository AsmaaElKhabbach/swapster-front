// == Import
// == Import
import './profile.scss';
import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import { useSelector, useDispatch } from 'react-redux';
import {
  MDBCol,
  MDBContainer,
  MDBRow, MDBCard,
  MDBCardText, MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon, MDBBtn,
} from 'mdb-react-ui-kit';
// import { setIsLoading } from '../../store/reducers/settings';
import Header from '../Partials/Header/index';
import Footer from '../Partials/Footer/index';
import { getMyBook } from '../../api/books';

// == Component
function UserPage() {
  const username = useSelector((state) => state.settings.user.data.name);
  const usercity = useSelector((state) => state.settings.user.data.city);
  const usermail = useSelector((state) => state.settings.user.data.email);
  const isLoggedIn = useSelector((state) => state.settings.isLoggedIn);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMyBook());
  // }, []);

  return (
    <>
      <Header />
      <main className='mjboot'>
        <section
          className="vh-100" 
          >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="6" className="mb-4 mb-lg-0 ">
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
                        }}
                      >
                        <div className="user">
                          {isLoggedIn && (
                          <Nav.Link href="/profile" className="nav-link">Bienvenue {username}</Nav.Link>
                          )}
                          {!isLoggedIn && (
                          <>
                            Pseudo
                          </>
                          )}

                        </div>
                      </MDBTypography>
                      {/* <MDBCardText>Web Designer</MDBCardText> */}
                      <MDBIcon far icon="edit mb-5" />
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody className="p-4">
                        <MDBTypography tag="h6">Informations</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Localisation</MDBTypography>
                            <MDBCardText className="text-muted"><input type="text" placeholder={usercity} /></MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Livres à donner</MDBTypography>
                            <MDBCardText className="text-muted"><input type="number" placeholder="12" /></MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        <MDBTypography tag="h6" />
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Email</MDBTypography>
                            <MDBCardText className="text-muted"><input type="email" placeholder={usermail} /></MDBCardText>
                            <MDBBtn className="sendButton">Envoyer un message</MDBBtn>
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
                                <Accordion.Header>
                                  Livres à donner
                                </Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: '#f5f0e6' }}>
                                  <main className="cardBody">
                                    <div>
                                      <p>
                                        Voyage au centre de la terre
                                      </p>
                                      <img
                                        src="https://m.media-amazon.com/images/I/51TIY0eeh5L._SY291_BO1,204,203,200_QL40_ML2_.jpg"
                                        alt="couverture de livre"
                                      />
                                      <button className="button" type="button">Supprimer le livre</button>
                                    </div>
                                    <div>
                                      <p>
                                        100 ans de solitude
                                      </p>
                                      <img
                                        src="https://images2.medimops.eu/product/07f827/M0202023811X-large.jpg"
                                        alt="couverture de livre"
                                      />
                                      <button className="button" type="button">Supprimer le livre</button>
                                    </div>
                                    <div>
                                      <p>
                                        bobby potter
                                      </p>
                                      <img
                                        src="https://m.media-amazon.com/images/I/51CP2LpqpTL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
                                        alt="couverture de livre"
                                      />
                                      <button className="button" type="button">Supprimer le livre</button>
                                    </div>
                                  </main>
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>Livres donnés</Accordion.Header>
                                <Accordion.Body style={{
                                  backgroundColor: '#f5f0e6',

                                }}
                                />
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
      <Footer className="footer" />
    </>
  );
}

// Export
export default UserPage;