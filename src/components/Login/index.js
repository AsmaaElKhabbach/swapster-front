// == Import
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss'
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
    <Form className= "login-form" onSubmit={handleSubmit}>
      <h1 className='login-title'>Connection</h1>
      <Form.Group size="lg"  className="form-input" controlId="formBasicEmail">
        <Form.Control
        type="email"
        name="email"
        placeholder="Adresse mail"
        value={email}
        onChange={handleChangeInput}
        />
      </Form.Group>

      <Form.Group size="lg" className="form-input" controlId="formBasicPassword">
        <Form.Control
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={password}
        onChange={handleChangeInput}
         />
      </Form.Group>
      <Button variant="primary" type="submit">
        Envoyez
      </Button>
    </Form>
    <Footer />
    </div>
  );
}

export default Login;
