import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';

const NavBar = ({ isLoggedIn, setIsLoggedIn, setJwt }) => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container fluid className='d-flex justify-content-end'>
        <Navbar.Brand className='m-0 p-0'>
          <img
            id='logo'
            alt='logo'
            src={logo}
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Nav className='ms-auto' style={{ gap: '15px' }}>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/posts'>
            Posts
          </Nav.Link>

          {isLoggedIn ? (
            <>
              <Nav.Link as={Link} to='/profile'>
                Profile
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/'
                onClick={() => {
                  window.localStorage.removeItem('jwt');
                  setJwt('');
                  setIsLoggedIn(false);
                }}
              >
                Log Out
              </Nav.Link>
            </>
          ) : (
            <Nav.Link as={Link} to='/login'>
              Log In
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
