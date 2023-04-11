import React from 'react';
import './styles.scss';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
}
  from 'mdb-react-ui-kit';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

function SignUp() {
  return (
    <>
      <Header />
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"

      >
        <div className="mask gradient-custom-3" />
        <MDBCard
          className="m-5"
          style={{
            maxWidth: '600px',
            marginTop: '500px',
          }}
        >
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            <MDBInput className="input" wrapperClass="mb-4" placeholder="Your Name" size="lg" id="form1" type="text" />
            <MDBInput className="input" wrapperClass="mb-4" placeholder="Your Email" size="lg" id="form2" type="email" />
            <MDBInput className="input" wrapperClass="mb-4" placeholder="Your City" size="lg" id="form3" type="city" />
            <MDBInput className="input" wrapperClass="mb-4" placeholder="Password" size="lg" id="form4" type="password" />
            <MDBInput className="input" wrapperClass="mb-4" placeholder="Repeat your password" size="lg" id="form4" type="password" />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox name="flexCheck" id="flexCheckDefault" label="I agree all statements in Terms of service" />
            </div>
            <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg">Register</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <Footer />
    </>
  );
}

export default SignUp;
