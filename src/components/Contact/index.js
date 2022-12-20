import React from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import headshot from '../../images/headshot.png'


function Contact(props) {
    return (
        <Container id='Contact'>
        <Row>        
            <h1>Contact</h1>
        </Row>
        <Row xs={1} md={2} lg={4} className="g-4">
            <Col>
            <div>Email: </div>
            </Col>
            <Col>
            Phone: 
            </Col>
            <Col>
            Git: 
            </Col>
        </Row>
        </Container>
    );
}

export default Contact;