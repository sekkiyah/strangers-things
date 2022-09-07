import React from 'react';
import { Container } from 'react-bootstrap';

const Profile = ({ user, user: { messages } }) => {
  console.log(user);

  return (
    <Container fluid className='text-center mt-4'>
      <h2>Messages to me</h2>
      {messages && messages.length ? (
        messages.map((message) => <h4>{message.content}</h4>)
      ) : (
        <h4>No messages found</h4>
      )}
      <br />
      <h2>Messages from me</h2>
    </Container>
  );
};

export default Profile;
