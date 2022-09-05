import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Posts = ({ posts }) => {
  return (
    <Card className='mt-3'>
      <ListGroup variant='flush'>
        {posts &&
          posts.map((post) => {
            const { description, location, price, title, _id } = post;
            return (
              <ListGroup.Item key={_id} className='p-3'>
                <Card.Title as='h2'>{title}</Card.Title>
                <Card.Text>Description: {description}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <Card.Text>Location: {location}</Card.Text>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </Card>
  );
};

export default Posts;
