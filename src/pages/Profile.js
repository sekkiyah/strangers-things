import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Profile = ({ user, user: { messages, _id } }) => {
  const [myMessages, setMyMessages] = useState([]);
  const [messagesToMe, setMessagesToMe] = useState([]);

  const parseMessages = () => {
    if (messages && messages.length) {
      const fromMe = messages.filter((message) => message.fromUser._id === _id);
      const toMe = messages.filter((message) => message.fromUser._id !== _id);
      setMyMessages(fromMe);
      setMessagesToMe(toMe);
    }
  };

  useEffect(() => {
    parseMessages();
  }, [user]); //Updated to rerender on user data load, otherwise refresh does not show messages

  return (
    <Container fluid className='text-center mt-4'>
      <h2>Messages to me</h2>
      {messagesToMe.length ? (
        messagesToMe.map((message) => (
          <React.Fragment key={message._id}>
            <h4>{message.content}</h4>
            <h5>From user: {message.fromUser.username}</h5>
          </React.Fragment>
        ))
      ) : (
        <h4>No messages found</h4>
      )}

      <br />

      <h2>Messages from me</h2>
      {myMessages.length ? (
        myMessages.map((message) => (
          <h4 key={message._id}>{message.content}</h4>
        ))
      ) : (
        <h4>No messages found</h4>
      )}
    </Container>
  );
};

export default Profile;
