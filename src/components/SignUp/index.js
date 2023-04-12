// == Import
import './signup.scss';
import React from 'react';
import {
  MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import { signUp } from '../../api/auth';
import { setError } from '../../store/reducers/settings';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

// == Component
function SignUp() {
  // récupération des hooks react-redux qu'on stock dans des variable
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // création d'une variable qui va contenir les données de notre formulaire que l'on stocke dans le state global
  const [formData, setFormData] = useState({
    // données du formulaire qu'on initié a vide
    name: '',
    email: '',
    city: '',
    password: '',
    passwordConfirm: '',
  });

  // on récupère les données erreur et chargemetn stocké dans l'initialstate du reducer settings
  const { isLoading, error } = useSelector((state) => state.settings.user);

  // Fonction qui permet de gérer la soumission du formulaire d'inscription
  const handleSubmit = (event) => {
    // on stop le comportement  par defaut de rechargement de la page
    event.preventDefault();
    // on envois un message d'erreur si le mot de passe est différent de la confirmation de mot de passe
    if (formData.password !== formData.passwordConfirm) {
      dispatch(setError("Passwords don't match."));
      // on envois une information à l'utilisateur en lui précisant que le mot de passe ne matche pas
      alert("Le mot de passe n'est pas identique");
      return;
    }
    // on émet l'intention d'enregistrer les données entrée dans le formulaire par l'utilisateur grace a la méthode signUp
    dispatch(signUp(formData));
    // on redirige l'utilisateur sur la page de connexion
    navigate('/login');
  };

  // Fonction qui permet de modifier les inputs du formulaire d'inscription
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="signup">
      <Header />
      <main>
        <MDBContainer
          fluid
          className="d-flex align-items-center justify-content-center"
        >
          <div className="mask gradient-custom-3" />
          <MDBCard
            className="m-5"
            style={{
              maxWidth: '650px',
              marginTop: '500px',
            }}
          >
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">Créer un compte</h2>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  value={formData.name}
                  onChange={handleInputChange}
                  name="name"
                  wrapperClass="mb-4"
                  placeholder="Votre pseudo"
                  size="lg"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                  wrapperClass="mb-4"
                  placeholder="Votre email"
                  size="lg"
                  id="form2"
                  type="email"
                />
                <MDBInput
                  value={formData.city}
                  onChange={handleInputChange}
                  name="city"
                  wrapperClass="mb-4"
                  placeholder="Votre ville"
                  size="lg"
                  id="form3"
                  type="text"
                />
                <MDBInput
                  value={formData.password}
                  onChange={handleInputChange}
                  name="password"
                  wrapperClass="mb-4"
                  placeholder="Veuillez saisir un mot de passe"
                  size="lg"
                  id="form4"
                  type="password"
                />
                <MDBInput
                  value={formData.passwordConfirm}
                  onChange={handleInputChange}
                  name="passwordConfirm"
                  wrapperClass="mb-4"
                  placeholder="Veuillez confirmer le mot de passe"
                  size="lg"
                  id="form5"
                  type="password"
                />
                <MDBBtn
                  type="submit"
                  className="mb-4 w-100 gradient-custom-4"
                  size="lg"
                  disabled={isLoading}
                >
                  Envoyer
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </main>
      <Footer />
    </div>
  );
}

// == Export
export default SignUp;
