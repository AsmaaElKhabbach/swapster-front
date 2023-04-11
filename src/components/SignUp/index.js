// == Import
import React from 'react';
import './styles.scss';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import { signUp } from '../../api/auth';
import { setError } from '../../store/reducers/settings';

// == Component
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    password: '',
    passwordConfirm: '',
  });

  const { isLoading, error } = useSelector((state) => state.settings.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      dispatch(setError("Passwords don't match."));
      return;
    }
    dispatch(signUp(formData));
    navigate('/login');
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

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
            <div className="d-flex flex-row justify-content-center mb-4" />
            <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg">Register</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <Footer />
    </>
  );
}

// == Export
export default SignUp;
