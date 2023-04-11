// == Import
import './login.scss'
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
    <Form className= 'mt-3 ms-10 md-5 mb-3 text-center' onSubmit={handleSubmit}>
      <h1 className='login-title text-center'>Connexion</h1>
      <Form.Group size="lg" controlId="formBasicEmail">
        <Form.Control 
        type="email"
        name="email"
        placeholder="Adresse mail"
        value={email}
        onChange={handleChangeInput}
        />
      </Form.Group>

      <Form.Group size="lg" controlId="formBasicPassword">
        <Form.Control
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={password}
        onChange={handleChangeInput}
         />
      </Form.Group>
      <Button variant="primary" type="submit" className='w-30 mb-5'>
        Envoyez
      </Button>
    </Form>
    </main>
    <Footer />
    </div>
  );
}

export default Login;
