// == Import
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss'
//== Component
function Login() {
  return (
    <div className="login">
    <Header />
    <Form className= "login-form">
      <Form.Group size="lg"  className="form-input" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Adresse mail" />
      </Form.Group>

      <Form.Group size="lg" className="form-input" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
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
