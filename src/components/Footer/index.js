import React from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

function Footer(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* <Navbar.Brand href="#home">Michael Bell</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#aboutme">About Me</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link eventKey={2} href="#Resume">
                    Resume
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse> */}
                <div class='text-light'>
                © 2020 Copyright: Michael Bell
                </div>
            </Container>
    </Navbar>
    );
}

export default Footer;