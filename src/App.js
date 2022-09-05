import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar, Posts, Profile, Home, Register, Login } from './components';
import { getPosts } from './api';
import { Container } from 'react-bootstrap';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [jwt, setJwt] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  async function fetchPosts() {
    const results = await getPosts();
    setPosts(results.data.posts);
  }

  useEffect(() => {
    fetchPosts();
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
          <Route path='/posts' element={<Posts posts={posts} />} />
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
