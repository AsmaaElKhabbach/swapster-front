import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {
  MDBCol,
  MDBContainer,
  MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBBtn,
} from 'mdb-react-ui-kit';
import Header from '../Partials/Header/index';
import Footer from '../Partials/Footer/index';
import './styles.scss';

function UserPage() {
  return (
    <>
      <Header />
      <section
        className="vh-100"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg)',
        }}
      >
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0 ">
              <MDBCard
                className="mb-3"
                style={{
                  backgroundColor: '#ffa07a',
                  borderRadius: '.5rem',
                  width: '50em',
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
                        width: '200px',
                      }}
                      fluid
                    />
                    <MDBTypography
                      tag="h5"
                      style={{
                        color: '#500000',
                      }}
                    >Pseudo
                    </MDBTypography>
                    {/* <MDBCardText>Web Designer</MDBCardText> */}
                    <MDBIcon far icon="edit mb-5" />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Localisation</MDBTypography>
                          <MDBCardText className="text-muted">Paris (75000)</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Livres a donner</MDBTypography>
                          <MDBCardText className="text-muted">12</MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <MDBTypography tag="h6" />
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">tata@tatas.com</MDBCardText>
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
                          <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header style={{
                                color: '#500000',
                              }}
                              >
                                Livres a donner
                              </Accordion.Header>
                              <Accordion.Body style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                backgroundColor: '#f5f0e6',

                              }}
                              >
                                <Card style={{
                                  width: '18rem',
                                  backgroundColor: ' #fffaf0',
                                }}
                                >
                                  <Card.Body>
                                    <Card.Title>Harry Potter</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">le magicien a lunettes</Card.Subtitle>
                                    <img
                                      alt=""
                                      className="image"
                                      src="https://kbimages1-a.akamaihd.net/6750d058-29cb-4626-9c12-a62e816a80cc/353/569/90/False/harry-potter-and-the-philosopher-s-stone-3.jpg"
                                    />

                                    <button type="button" className="givenButton">Supprimer le livre</button>
                                  </Card.Body>
                                  <Card.Body>
                                    <Card.Title>100 ans de solitude</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">un livre qu'il est bien</Card.Subtitle>
                                    <img
                                      alt=""
                                      className="image"
                                      src="https://m.media-amazon.com/images/I/410B+B-datL._SY344_BO1,204,203,200_.jpg"
                                    />

                                    <button type="button" className="givenButton">boite a livré</button>
                                  </Card.Body>
                                </Card>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>Livres données</Accordion.Header>
                              <Accordion.Body style={{
                                backgroundColor: '#f5f0e6',

                              }}
                              >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                              </Accordion.Body>
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
      <Footer />
    </>
  );
}

export default UserPage;
