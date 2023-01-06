import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Components/Check.css'


function Goat() {
  return (
    <Container fluid>
        
    <Row>
      <Col className="bg-success " ></Col>
    </Row>
  </Container>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
  );
}

export default Goat;