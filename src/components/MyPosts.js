import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

const MyPosts = ({ posts }) => {
  return (
    posts && (
      <ListGroup variant='flush'>
        {posts.length ? (
          posts.map((post) => {
            const { description, location, price, title, _id } = post;
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
              </ListGroup.Item>
            );
          })
        ) : (
          <ListGroup.Item className='p-3'>
            <h2 className='text-center'>No Posts found</h2>
          </ListGroup.Item>
        )}
      </ListGroup>
    )
  );
};

export default MyPosts;