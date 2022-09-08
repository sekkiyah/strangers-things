import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { sendMessage } from '../api';

const Message = ({ post, jwt }) => {
  const { location, price, title, _id, author } = post;
  const [showModal, setShowModal] = useState(false);
  const [messageDetails, setMessageDetails] = useState('');

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setMessageDetails('');
  };

  const handleSubmit = async () => {
    const response = await sendMessage({ content: messageDetails }, _id, jwt);
    if (response.success) {
      closeModal();
      setMessageDetails('');
      console.log(response.data);
    } else {
      console.error(result.error.message);
    }
  };

  return (
    <>
      <Button
        variant='success'
        onClick={() => {
          openModal();
        }}
      >
        Send message
      </Button>

      <Modal show={showModal} onHide={closeModal} style={{ fontSize: '20px' }}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Modal.Header>
            <Modal.Title className='w-100 text-center'>New Message</Modal.Title>
          </Modal.Header>
          <Modal.Body className='mb-3 pt-1'>
            <Form.Group as={Row}>
              <Form.Label column sm='2'>
                Title:
              </Form.Label>
              <Col sm='10'>
                <Form.Control plaintext readOnly defaultValue={title} />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm='2'>
                Price:
              </Form.Label>
              <Col sm='4'>
                <Form.Control plaintext readOnly defaultValue={price} />
              </Col>

              <Form.Label column sm='2'>
                Location:
              </Form.Label>
              <Col sm='4'>
                <Form.Control plaintext readOnly defaultValue={location} />
              </Col>
            </Form.Group>

            <br />

            <Form.Group controlId='detail'>
              <Form.Label>Message user: {author.username}</Form.Label>
              <Form.Control
                type='username'
                placeholder='Enter message'
                as='textarea'
                rows={3}
                required
                onChange={(e) => setMessageDetails(e.target.value)}
                value={messageDetails}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' type='submit'>
              Send
            </Button>
            <Button variant='secondary' onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Message;
