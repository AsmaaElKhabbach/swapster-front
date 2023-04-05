// == Import
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { changeCredentialsValue } from '../../store/reducers/settings';
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
    // // Je récupère la valeur de l'input (mon élément HTML)
    // const newValue = event.target.value;
    // // Je récupère la propriété name de mon input
    // const inputName = event.target.name;
    // // J'emets mon intention de changer la valeur de ma donnée
    // dispatch(changeCredentialsValue({
    //   value: newValue,
    //   name: inputName,
    // }));
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
