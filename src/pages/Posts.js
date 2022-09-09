import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { getAllPosts } from '../api';
import { AllPosts, MyPosts, CreatePost } from '../components/';

const Posts = ({ isLoggedIn, jwt, user: { posts, _id }, navigate }) => {
  const [allPosts, setAllPosts] = useState([]);

  async function fetchPosts() {
    setAllPosts(await getAllPosts());
  }

  useEffect(() => {
    fetchPosts();
  }, []);

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
          <AllPosts
            allPosts={allPosts}
            userId={_id}
            isLoggedIn={isLoggedIn}
            jwt={jwt}
            navigate={navigate}
          />
        </Tab>
        {isLoggedIn && (
          <Tab eventKey='my-posts' title='My Posts'>
            <MyPosts posts={posts} />
          </Tab>
        )}
        {isLoggedIn && (
          <Tab eventKey='create-post' title='Create Post' variant='success'>
            <CreatePost jwt={jwt} />
          </Tab>
        )}
      </Tabs>
    </>
  );
};

export default Posts;
