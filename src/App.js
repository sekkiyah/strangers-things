import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar, Profile, Home, Register, Login } from './components';
import { Posts } from './pages';
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

  async function persistLogin() {
    window.localStorage.getItem('jwt') &&
      setJwt(window.localStorage.getItem('jwt'));
    jwt && setIsLoggedIn(true);
  }

  async function getUser() {
    jwt && setUser(await getUserData(jwt));
    console.log(user);
  }

  useEffect(() => {
    fetchPosts();
    persistLogin();
    getUser();
  }, [jwt]);

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setJwt={setJwt}
      />
      <Container fluid id='main-app'>
        <Routes>
          <Route path='/' element={<Home id='Home' />} />
          <Route
            path='/posts'
            element={
              <Posts user={user} allPosts={allPosts} isLoggedIn={isLoggedIn} />
            }
          />
          <Route path='/profile' element={<Profile />} />
          <Route
            path='/register'
            element={<Register setJwt={setJwt} navigate={navigate} />}
          />
          <Route
            path='/login'
            element={
              <Login
                setJwt={setJwt}
                navigate={navigate}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
