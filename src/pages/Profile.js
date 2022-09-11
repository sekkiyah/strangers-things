import React, { useEffect, useState } from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Messages } from '../components';

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

  console.log(myMessages);
  console.log(messagesToMe);

  useEffect(() => {
    parseMessages();
  }, [user]); //Updated to rerender on user data load, otherwise refresh does not show messages

  return (
    <Container fluid className='mt-3'>
      <Accordion alwaysOpen className='text-center'>
        <Accordion.Item>
          <Accordion.Header>Messages To Me</Accordion.Header>
          <Accordion.Body>
            <Messages messageArray={messagesToMe} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <br />

      <Accordion alwaysOpen className='text-center'>
        <Accordion.Item>
          <Accordion.Header>Messages From Me</Accordion.Header>
          <Accordion.Body>
            <Messages messageArray={myMessages} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Profile;
