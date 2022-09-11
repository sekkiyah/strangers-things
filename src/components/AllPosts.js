import React, { useState } from 'react';
import { Button, Card, Form, InputGroup, ListGroup } from 'react-bootstrap';
import MessageForm from './MessageForm';
import { Link } from 'react-router-dom';
import { deletePost, getPostById } from '../api';

const AllPosts = ({
  allPosts,
  userId,
  isLoggedIn,
  jwt,
  fetchPosts,
  fetchMyPosts,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  function postMatches(post, term) {
    const { title, description } = post;
    if (
      title.toLowerCase().includes(term.toLowerCase()) ||
      description.toLowerCase().includes(term.toLowerCase())
    ) {
      return post;
    }
  }
  const result = getPostById('6316d8897835aa001715e889');
  console.log(result);

  const filteredPosts = allPosts.filter((post) =>
    postMatches(post, searchTerm)
  );
  const postsToDisplay = searchTerm.length ? filteredPosts : allPosts;

  const handleDelete = async (post) => {
    const response = confirm('Are you sure you want to delete?');
    if (response) {
      const result = await deletePost(post._id, jwt);
      if (result.success) {
        fetchPosts();
        fetchMyPosts();
      }
    }
  };

  return (
    <ListGroup variant='flush'>
      {postsToDisplay && (
        <>
          <InputGroup className='p-2 text-white bg-dark'>
            <Form.Control
              placeholder='Search Posts'
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <Button variant='info' onClick={() => setSearchTerm('')}>
              Clear
            </Button>
          </InputGroup>
          {postsToDisplay.length ? (
            postsToDisplay.map((post) => {
              const {
                description,
                location,
                price,
                title,
                willDeliver,
                _id,
                author,
              } = post;

              return (
                <ListGroup.Item key={_id} className='px-0 py-3 mx-3'>
                  <Card.Title as='h2'>{title}</Card.Title>
                  <Card.Text>Description: {description}</Card.Text>
                  <Card.Text>Price: {price}</Card.Text>
                  <Card.Text>Location: {location}</Card.Text>
                  <Card.Text>
                    Will Deliver: {willDeliver ? 'Yes' : 'No'}
                  </Card.Text>
                  {isLoggedIn && (
                    <>
                      {author._id === userId ? (
                        <>
                          <Link to={`/posts/${_id}`} state={{ post: post }}>
                            <Button variant='info'>Edit post</Button>
                          </Link>
                          <Button
                            variant='danger'
                            onClick={() => handleDelete(post)}
                            className='mx-2'
                          >
                            Delete
                          </Button>
                        </>
                      ) : (
                        <>
                          <MessageForm post={post} jwt={jwt} />
                        </>
                      )}
                    </>
                  )}
                </ListGroup.Item>
              );
            })
          ) : (
            <h3 className='text-center mt-4'>No Posts Found</h3>
          )}
        </>
      )}
    </ListGroup>
  );
};

export default AllPosts;
