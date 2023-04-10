// == Import 
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {signUp} from '../../api/auth';
import { setError } from '../../store/reducers/settings';

// == Component 
function SignUp() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    password: "",
    confirmPassword: ""
  });

  const { isLoading, error } = useSelector(state => state.settings.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      dispatch(setError("Passwords don't match."));
      return;
    }
    dispatch(signUp(formData));
  }

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  
  return (
    <>
      <Header />
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg)',
        }}
      >
        <div className="mask gradient-custom-3" />
        <MDBCard style={{ maxWidth: '650px', marginTop: 110, marginBottom: 50, }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">Créer un compte</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <MDBInput 
              value={formData.name}
              onChange={handleInputChange} 
              name = "name"
              wrapperClass="mb-4" 
              style={{width: '500px'}} 
              placeholder="Votre nom" 
              size="lg" id="form1" 
              type="text" 
              />
              <MDBInput 
              value={formData.email} 
              onChange={handleInputChange} 
              name="email"
              wrapperClass="mb-4" 
              style={{width: '500px'}} 
              placeholder="Votre email" 
              size="lg" id="form2" 
              type="email" 
              />
              <MDBInput 
              value={formData.city} 
              onChange={handleInputChange} 
              name="city"
              wrapperClass="mb-4" 
              style={{width: '500px'}} 
              placeholder="Votre ville" 
              size="lg" id="form3" 
              type="text"
              />
              <MDBInput 
              value={formData.password} 
              onChange={handleInputChange} 
              name="password"
              wrapperClass="mb-4" 
              style={{width: '500px'}} 
              placeholder="Veuillez saisir un mot de passe" 
              size="lg" id="form4" 
              type="password"
              />
              <MDBInput 
              value={formData.confirmPassword} 
              onChange={handleInputChange} 
              name="confirmPassword"
              wrapperClass="mb-4" 
              style={{width: '500px'}} 
              placeholder="Veuillez confirmer le mot de passe" 
              size="lg" id="form5" 
              type="password"
              />
              <MDBBtn
              type='submit' 
              className="mb-4 w-100 gradient-custom-4" 
              size="lg" 
              disabled={isLoading}>
              Envoyer
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <Footer />
    </>
  );
}

// == Export 
export default SignUp;
