import React from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import headshot from '../../images/headshot.png'


function AboutMe(props) {
    return (
        <Container id='AboutMe'>
        <Row>        
            <h1>About Me</h1>
        </Row>
        <Row id='Portfolio' xs={1} md={2} lg={4} className="g-4">
            <Col>
            <Container>
                <Card.Img variant="top" src={headshot} />
            </Container>
            </Col>
            <Col>
            about me description 
            </Col>
        </Row>
        </Container>
    );
}

export default AboutMe;