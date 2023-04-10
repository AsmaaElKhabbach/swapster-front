import React from 'react';
import {
  MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBBtn,
} from 'mdb-react-ui-kit';
import Header from '../Partials/Header/index';
import Footer from '../Partials/Footer/index';

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
                  height: '40em',
                }}
              >
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}
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
                    <MDBTypography tag="h5">Pseudo</MDBTypography>
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
                          <MDBBtn>Envoyer un message</MDBBtn>
                        </MDBCol>
                        {/* <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">123 456 789</MDBCardText>
                        </MDBCol> */}
                      </MDBRow>
                      <MDBContainer
                        breakpoint="lg"
                        style={{
                          backgroundColor: '#500000',
                          color: 'white',

                        }}
                      >boite de gestion de don
                      </MDBContainer>
                      {/* <div className="d-flex justify-content-start">
                        <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                      </div> */}
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
