import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

const AllPosts = ({ allPosts, userId }) => {
  return (
    <ListGroup variant='flush'>
      {allPosts &&
        allPosts.map((post) => {
          const { description, location, price, title, _id, author } = post;
          return (
            <ListGroup.Item key={_id} className='px-1 pt-1 pb-3 mb-3'>
              {/* <h2>{title}</h2>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <p>Location: {location}</p> */}
              <Card.Title as='h2'>{title}</Card.Title>
              <Card.Text>Description: {description}</Card.Text>
              <Card.Text>Price: {price}</Card.Text>
              <Card.Text>Location: {location}</Card.Text>
              {author._id === userId ? (
                <Button>This is your post</Button>
              ) : (
                <Button variant='success'>
                  Send message to {author.username}
                </Button>
              )}
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
};

export default AllPosts;
