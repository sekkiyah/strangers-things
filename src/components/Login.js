import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { loginUser } from '../api';

const Login = ({ setJwt, navigate, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    await loginUser(username, password).then((result) => {
      if (result.success) {
        setJwt(result.data.token);
        setIsLoggedIn(true);
        window.localStorage.setItem('jwt', result.data.token);
        navigate('/');
      } else {
        console.error(result.error);
      }
    });
  };

  return (
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
        <Form.Group className='m-3' controlId='formBasicEmail'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='m-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='m-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Keep me logged in' />
        </Form.Group>
        <Form.Group className='m-3 gap-2'>
          <Button variant='primary' type='submit' className=''>
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
  );
};

export default Login;
