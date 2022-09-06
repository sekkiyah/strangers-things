import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { AllPosts, MyPosts, CreatePost } from '../components/';

const Posts = ({ allPosts, isLoggedIn, user: { posts, _id } }) => {
  return (
    <>
      <Tabs
        defaultActiveKey='all-posts'
        justify='true'
        variant='pills'
        className='bg-light my-1'
        style={{ fontSize: '25px' }}
      >
        <Tab eventKey='all-posts' title='All Posts'>
          <AllPosts allPosts={allPosts} userId={_id} />
        </Tab>
        {isLoggedIn && (
          <Tab eventKey='my-posts' title='My Posts'>
            <MyPosts posts={posts} />
          </Tab>
        )}
        {isLoggedIn && (
          <Tab eventKey='create-post' title='Create Post' variant='success'>
            <CreatePost />
          </Tab>
        )}
      </Tabs>
    </>
  );
};

export default Posts;
