import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar, Posts, Profile, Home } from './components';
import { getPosts } from './api';
import { Container } from 'react-bootstrap';

const App = () => {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const results = await getPosts();
    setPosts(results.data.posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <NavBar />
      <Container fluid id='main-app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts posts={posts} />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
