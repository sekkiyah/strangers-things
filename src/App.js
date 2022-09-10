import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar, Register, Login } from './components';
import { Home, Posts, Profile, EditPost } from './pages';
import { getUserData } from './api';
import { Container } from 'react-bootstrap';

const App = () => {
  const [jwt, setJwt] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

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
      } else {
        console.error('User data not found');
      }
    }
  }

  useEffect(() => {
    persistLogin();
  }, [jwt]);

  return (
    <>
      <div className='sticky-top'>
        <Navbar isLoggedIn={isLoggedIn} logOut={logOut} />
      </div>
      <Container fluid id='main-app'>
        <Routes>
          <Route path='/' element={<Home id='Home' user={user} />} />
          <Route
            path='/posts'
            element={
              <Posts
                user={user}
                isLoggedIn={isLoggedIn}
                jwt={jwt}
                navigate={navigate}
              />
            }
          />
          <Route
            path='/posts/:postId'
            element={<EditPost user={user} navigate={navigate} jwt={jwt} />}
          />
          <Route path='/profile' element={<Profile user={user} />} />
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
