import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { registerUser } from '../api';

const Register = ({ setJwt, navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    await registerUser(username, password).then((result) => {
      if (result.success) {
        setJwt(result.data.token);
        window.localStorage.setItem('jwt', result.data.token);
        navigate('/');
      } else {
        console.error(result.error);
      }
    });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter email'
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Keep me logged in' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default Register;
