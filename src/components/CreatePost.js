import React, { useEffect, useState } from 'react';
import { Button, Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { createPost } from '../api';

const CreatePost = ({ jwt }) => {
  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = async () => {
    const response = await createPost(post, jwt);
    console.log(response);
  };

  useEffect(() => {
    setPost({
      title: title,
      description: description,
      price: price,
      location: location,
      willDeliver: willDeliver,
    });
  }, [title, description, price, location, willDeliver]);

  return (
    <>
      <Card className='flex-fill mt-3 mx-5 shadow'>
        <Card.Header as='h3' className='text-center'>
          New Post
        </Card.Header>
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
              onClick={() => {
                setTitle('');
                setDescription('');
                setPrice('');
                setLocation('');
                setWillDeliver(false);
              }}
            >
              Clear Fields
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </>
  );
};

export default CreatePost;
