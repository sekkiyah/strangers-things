import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const MyPosts = ({ myPosts }) => {
  return (
    myPosts && (
      <ListGroup variant='flush' className=''>
        {myPosts.length ? (
          myPosts.map((post) => {
            const {
              description,
              location,
              price,
              title,
              willDeliver,
              _id,
              messages, //Add link to messages for selected post later
            } = post;
            return (
              <ListGroup.Item key={_id} className=' px-0 py-3 mx-3'>
                <Card.Title as='h2'>{title}</Card.Title>
                <Card.Text>Description: {description}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <Card.Text>Location: {location}</Card.Text>
                <Card.Text>
                  Will Deliver: {willDeliver ? 'Yes' : 'No'}
                </Card.Text>
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
