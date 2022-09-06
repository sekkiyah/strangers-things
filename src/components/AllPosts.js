import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const AllPosts = ({ allPosts }) => {
  return (
    <ListGroup variant='flush'>
      {allPosts &&
        allPosts.map((post) => {
          const { description, location, price, title, _id } = post;
          return (
            <ListGroup.Item key={_id} className='p-3'>
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
        })}
    </ListGroup>
  );
};

export default AllPosts;
