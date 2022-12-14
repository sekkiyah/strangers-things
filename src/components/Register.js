import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { registerUser } from '../api';

const Register = ({ setJwt, navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    await registerUser(username, password).then((result) => {
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
          Register
        </Card.Header>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Form.Group className='m-3' controlId='username'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='username'
              placeholder='Enter username'
              required
              minLength='3'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Form.Group>

          <Form.Group className='m-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              required
              minLength='8'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Form.Text id='passwordHelp' muted>
              Must be a minimum of 8 characters.
            </Form.Text>
          </Form.Group>
          <Form.Group className='m-3'>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
            <Button
              variant='danger'
              className='mx-2'
              onClick={() => navigate('/login')}
            >
              Cancel
            </Button>
          </Form.Group>
        </Form>
      </Card>
      {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
    </>
  );
};

export default Register;
