// == Import
import './login.scss'
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import { useDispatch } from 'react-redux';
import { login } from '../../api/auth';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

//== Component
function Login() {
  // on récupére les hooks de react qu'on stock dans des variables
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  création des variable email et password dans le state global
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction qui permet de changer l'input et introduire la valeur entré par l'utilisateur
  const handleChangeInput = (event) => {
    if(event.target.name === "email"){
      // modification de l'input email
      setEmail(event.target.value)
    }else{
      // modification de l'input password
      setPassword(event.target.value)
    }
  };

  // Fonction qui permet de gérer la soumission du formulaire de connexion
  const handleSubmit = (event) => {
    // on stop le comportement de rechargement par defaut de la page 
    event.preventDefault();
    // modification de l'initialstate du reducer settings grace a la methode login 
    dispatch(login(
      email,
      password,
      // on utilise la navigate pour rediriger l'utilisateur sur la page d'accueil une fois connecté
      () => navigate("/")
    ));
  };

  return (
    <div className="login">
    <Header />
    <main>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <div className="mask gradient-custom-3" />
        <MDBCard style={{ maxWidth: '650px', marginTop: 110, marginBottom: 50, }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">Connexion</h2>
            <form onSubmit={handleSubmit}>
              <MDBInput 
                type="email"
                name="email"
                placeholder="Adresse mail"
                value={email}
                onChange={handleChangeInput}
                size="lg" id="form1" 
                wrapperClass="mb-4" 
              />
              <MDBInput 
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={password}
                onChange={handleChangeInput}
                size="lg" id="form2"
                wrapperClass="mb-4" 
              />          
              <MDBBtn
              type='submit' 
              className="mb-4 w-100 gradient-custom-4" 
              size="lg">
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

export default Login;
