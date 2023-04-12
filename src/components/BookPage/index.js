// == Import
import './bookpage.scss'
import Footer from "../Partials/Footer"
import Header from "../Partials/Header"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import EmailTo from '../EmailTo';
import Button from 'react-bootstrap/Button';
// == Component
function BookPage() {
  return (
    <div>
      <Header />
      <main>
      <Card className="book">
        <Card.Img variant="top" src="https://images2.medimops.eu/product/cd0774/M02072730848-large.jpg" />
        <Card.Body>
          <Card.Title>Le Petit Prince</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Button variant="primary">Donner le livre</Button>
        </Card.Body>
    </Card>

    <Table className='givers' size= "lg" striped bordered hover>
      <thead>
        <tr>
          <th>UserName</th>
          <th>Etat</th>
          <th>Ville</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Bon</td>
          <td>Paris</td>
          <td> <EmailTo label="Contacter le donneur" mailto="john@john.com" /> </td>
        </tr>
        <tr>
        <td>John</td>
          <td>Bon</td>
          <td>Paris</td>
          <td> <EmailTo label="Contacter le donneur" mailto="john@john.com" /> </td>
        </tr>
        <tr>
        <td>John</td>
          <td>Bon</td>
          <td>Paris</td>
          <td> <EmailTo label="Contacter le donneur" mailto="john@john.com" /> </td>
        </tr>
        <tr>
          <td>John</td>
          <td>Bon</td>
          <td>Paris</td>
          <td> <EmailTo label="Contacter le donneur" mailto="john@john.com" /> </td>
        </tr>
        <tr>
          <td>John</td>
          <td>Bon</td>
          <td>Paris</td>
          <td> <EmailTo label="Contacter le donneur" mailto="john@john.com" /> </td>
        </tr>
        <tr>
          <td>John</td>
          <td>Bon</td>
          <td>Paris</td>
          <td> <EmailTo label="Contacter le donneur" mailto="john@john.com" /> </td>
        </tr>
        <tr>
          <td>John</td>
          <td>Bon</td>
          <td>Paris</td>
          <td> <EmailTo label="Contacter le donneur" mailto="john@john.com" /> </td>
        </tr>
      </tbody>
    </Table>
      </main>
      <Footer />
    </div>
  )
}

// == Export
export default BookPage
