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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const email = useSelector((state) => state.settings.credentials.email);
  // const password = useSelector((state) => state.settings.credentials.password);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeInput = (event) => {
    if(event.target.name === "email"){
      setEmail(event.target.value)
    }else{
      setPassword(event.target.value)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(
      email,
      password,
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
