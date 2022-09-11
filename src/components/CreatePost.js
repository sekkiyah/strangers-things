import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { createPost } from '../api';

const CreatePost = ({ jwt, fetchPosts, fetchMyPosts }) => {
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setTitle('');
    setDescription('');
    setPrice('');
    setLocation('');
    setWillDeliver(false);
  };

  const handleSubmit = async () => {
    const post = {
      title: title,
      description: description,
      price: price,
      location: location,
      willDeliver: willDeliver,
    };
    const response = await createPost(post, jwt);
    if (response.success) {
      closeModal();
      fetchPosts();
      fetchMyPosts();
    } else {
      console.error(response.error.message);
    }
  };

  return (
    <>
      <Button
        variant='success'
        className='position-fixed sticky-bottom rounded-pill shadow'
        size='lg'
        style={{ bottom: '25px', right: '25px' }}
        onClick={() => {
          openModal();
        }}
      >
        Create Post
      </Button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header style={{ fontSize: '20px' }}>
          <Modal.Title className='w-100 text-center'>New Post</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Form.Group className='m-3'>
            <FloatingLabel label='Title'>
              <Form.Control
                id='postTitle'
                placeholder='Title'
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </FloatingLabel>
          </Form.Group>

          <Row className='m-3'>
            <Col className='p-0'>
              <Form.Group style={{ marginRight: '.5rem' }}>
                <FloatingLabel label='Price'>
                  <Form.Control
                    id='postPrice'
                    placeholder='Price'
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col className='p-0'>
              <Form.Group style={{ marginLeft: '.5rem' }}>
                <FloatingLabel label='Location'>
                  <Form.Control
                    id='postLocation'
                    placeholder='Location'
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className='m-3'>
            <FloatingLabel label='Description'>
              <Form.Control
                as='textarea'
                id='postDescription'
                placeholder='Description'
                required
                style={{ height: '80px' }}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className='m-3'>
            <Form.Check
              id='postWillDeliver'
              type='checkbox'
              label='Willing to deliver'
              onChange={(e) => {
                setWillDeliver(e.target.checked);
              }}
              checked={willDeliver}
            />
          </Form.Group>

          <Form.Group className='m-3 d-flex justify-content-end'>
            <Button variant='success' type='submit'>
              Create Post
            </Button>
            <Button
              variant='secondary'
              className='mx-2 justify-self-end'
              onClick={() => closeModal()}
            >
              Close
            </Button>
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
};

export default CreatePost;
