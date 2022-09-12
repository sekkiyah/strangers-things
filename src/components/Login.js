import React, { useState } from 'react';
import { Form, Button, Card, FloatingLabel, Alert } from 'react-bootstrap';
import { loginUser } from '../api';

const Login = ({ setJwt, navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    await loginUser(username, password).then((result) => {
      if (result.success) {
        window.localStorage.setItem('jwt', result.data.token);
        setJwt(result.data.token);
        navigate('/');
      } else {
        setErrorMessage(result.error.message);
      }
    });
  };

  return (
    <>
      <Card className='flex-fill m-5 shadow'>
        <Card.Header as='h3' className='text-center'>
          Welcome, please sign in
        </Card.Header>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Form.Group className='m-3'>
            <FloatingLabel label='Username'>
              <Form.Control
                id='username'
                type='text'
                placeholder='Enter username'
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className='m-3'>
            <FloatingLabel label='Password'>
              <Form.Control
                id='password'
                type='password'
                placeholder='Password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className='m-3'>
            <Button variant='primary' type='submit'>
              Login
            </Button>
            <Button
              variant='success'
              className='mx-2'
              onClick={() => navigate('/register')}
            >
              Register
            </Button>
          </Form.Group>
        </Form>
      </Card>
      {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
    </>
  );
};

export default Login;
