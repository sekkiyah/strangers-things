import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';

const Navigation = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container fluid>
          <Navbar.Brand>
            <img
              id='logo'
              alt='logo'
              src={logo}
              className='d-inline-block align-top'
            />
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/posts'>
              Posts
            </Nav.Link>
            <Nav.Link as={Link} to='/profile'>
              Profile
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
