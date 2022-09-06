import React from 'react';
import { Card, ListGroup, Tab, Tabs } from 'react-bootstrap';
import { AllPosts, MyPosts } from '../components/';

const Posts = ({ allPosts, isLoggedIn, user: { posts } }) => {
  return (
    <Tabs
      defaultActiveKey='all-posts'
      justify
      variant='pills'
      className='bg-light'
      style={{ fontSize: '25px' }}
    >
      <Tab eventKey='all-posts' title='All Posts'>
        <AllPosts allPosts={allPosts} />
      </Tab>
      {isLoggedIn && (
        <Tab eventKey='my-posts' title='My Posts'>
          <MyPosts />
        </Tab>
      )}
    </Tabs>
  );
};

export default Posts;
