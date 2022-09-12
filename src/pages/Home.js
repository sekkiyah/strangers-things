import React from 'react';
import { Container } from 'react-bootstrap';

const Home = ({ user }) => {
  const githubURL = 'https://github.com/sekkiyah/strangers-things';

  //Flush out later
  return (
    <Container fluid className='text-center mt-4'>
      <h2>
        Welcome to Stranger's Things{user.username && ` ${user.username}`}!
      </h2>
      <h4>This is a React project</h4>

      <h4>
        Check out the code on my{' '}
        <a target='_blank' href={githubURL}>
          github!
        </a>
      </h4>
    </Container>
  );
};

export default Home;
