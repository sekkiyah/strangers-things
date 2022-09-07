import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar, Register, Login } from './components';
import { Home, Posts, Profile } from './pages';
import { getAllPosts, getUserData } from './api';
import { Container } from 'react-bootstrap';

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [jwt, setJwt] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  async function fetchPosts() {
    setAllPosts(await getAllPosts());
  }

  function logOut() {
    window.localStorage.removeItem('jwt');
    setJwt('');
    setUser({});
    setIsLoggedIn(false);
  }

  async function persistLogin() {
    if (window.localStorage.getItem('jwt')) {
      setJwt(window.localStorage.getItem('jwt'));
    }
    if (jwt) {
      setIsLoggedIn(true);
      const response = await getUserData(jwt);
      if (response.success) {
        setUser(response.data);
        console.log('user is');
        console.log(user);
      } else {
        console.log('User data not found');
      }
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    persistLogin();
  }, [jwt]);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} logOut={logOut} />
      <Container fluid id='main-app'>
        <Routes>
          <Route path='/' element={<Home id='Home' />} />
          <Route
            path='/posts'
            element={
              <Posts
                user={user}
                allPosts={allPosts}
                isLoggedIn={isLoggedIn}
                jwt={jwt}
              />
            }
          />
          <Route path='/profile' element={<Profile />} />
          <Route
            path='/register'
            element={<Register setJwt={setJwt} navigate={navigate} />}
          />
          <Route
            path='/login'
            element={<Login setJwt={setJwt} navigate={navigate} />}
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
