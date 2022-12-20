import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import headshot from '../../images/headshot.png'


function Resume(props) {
    return (
        <Container id='Resume'>
        <Row>        
            <h1>Resume</h1>
        </Row>
        <Row xs={1} md={2} lg={4} className="g-4">
            Resume
        </Row>
        </Container>
    );
}

export default Resume;