import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Posts = ({ posts }) => {
  return (
    <>
      <ListGroup>
        {posts &&
          posts.map((post) => {
            const { description, location, price, title, _id } = post;
            return (
              <ListGroup.Item key={_id}>
                <h3>{title}</h3>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <p>Location: {location}</p>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </>
  );
};

export default Posts;
