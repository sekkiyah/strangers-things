import React, { useEffect, useState } from 'react';
import { Button, Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { updatePost } from '../api';

const EditPost = ({ jwt, navigate }) => {
  // const { postId } = useParams();
  const loc = useLocation(); //follow up
  const { post } = loc.state;
  const { title, description, location, price, willDeliver, _id } = post;

  const [myTitle, setMyTitle] = useState(title);
  const [myDescription, setMyDescription] = useState(description);
  const [myLocation, setMyLocation] = useState(location);
  const [myPrice, setMyPrice] = useState(price);
  const [postWillDeliver, setPostWillDeliver] = useState(willDeliver);
  const [myPost, setPost] = useState({});

  const handleSubmit = async () => {
    const result = await updatePost(_id, myPost, jwt);
    if (result.success) {
      navigate('/posts');
    } else {
      console.error(result.error.message);
    }
  };

  useEffect(() => {
    setPost({
      title: myTitle,
      description: myDescription,
      location: myLocation,
      price: myPrice,
      willDeliver: postWillDeliver,
    });
  }, [myTitle, myDescription, myLocation, myPrice, postWillDeliver]);

  return (
    <>
      <Card className='flex-fill mt-3 mx-5 shadow'>
        <Card.Header as='h3' className='text-center'>
          Edit Post
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
                onChange={(e) => setMyTitle(e.target.value)}
                value={myTitle}
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
                    onChange={(e) => setMyPrice(e.target.value)}
                    value={myPrice}
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
                    onChange={(e) => setMyLocation(e.target.value)}
                    value={myLocation}
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
                onChange={(e) => setMyDescription(e.target.value)}
                value={myDescription}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className='m-3'>
            <Form.Check
              id='postWillDeliver'
              type='checkbox'
              label='Willing to deliver'
              onChange={(e) => {
                setPostWillDeliver(e.target.checked);
              }}
              checked={postWillDeliver}
            />
          </Form.Group>

          <Form.Group className='m-3 d-flex justify-content-end'>
            <Button variant='success' type='submit'>
              Update Post
            </Button>
            <Button
              variant='secondary'
              className='mx-2 justify-self-end'
              onClick={() => navigate('/posts')}
            >
              Cancel
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </>
  );
};

export default EditPost;
