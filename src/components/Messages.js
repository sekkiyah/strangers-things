import React from 'react';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';

const Messages = ({ messageArray }) => {
  return messageArray.length ? (
    <ListGroup variant='flush'>
      {messageArray.map((message) => {
        return (
          <ListGroup.Item key={message._id} className='p-3 my-2 bg-dark shadow'>
            <Form className='bg-light'>
              <Form.Group as={Row}>
                <Form.Label column sm='2'>
                  Post Title:
                </Form.Label>
                <Col sm='10'>
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={message.post.title}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm='2'>
                  Message:
                </Form.Label>
                <Col sm='10'>
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={message.content}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm='2'>
                  From:
                </Form.Label>
                <Col sm='10'>
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={message.fromUser.username}
                  />
                </Col>
              </Form.Group>
            </Form>
            {/* Build out later */}
            {/* <Button variant='success' className='mt-3'>
              View Post
            </Button> */}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  ) : (
    <h3>No messages found</h3>
  );
};

export default Messages;
