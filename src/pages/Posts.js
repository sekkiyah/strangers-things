import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { getAllPosts, getMyPosts } from '../api';
import { AllPosts, MyPosts, CreatePost } from '../components/';

const Posts = ({ isLoggedIn, jwt, user: { posts, _id }, navigate }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);

  async function fetchPosts() {
    setAllPosts(await getAllPosts());
  }

  async function fetchMyPosts() {
    const result = await getMyPosts(jwt);
    if (result.success) {
      const data = result.data.posts;
      if (data.length) {
        const filteredPosts = data.filter((post) => post.isAuthor);
        setMyPosts(filteredPosts);
      }
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchMyPosts();
  }, [allPosts]);

  return (
    <>
      {isLoggedIn && (
        <CreatePost
          jwt={jwt}
          fetchPosts={fetchPosts}
          fetchMyPosts={fetchMyPosts}
        />
      )}

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
            fetchPosts={fetchPosts}
            fetchMyPosts={fetchMyPosts}
            userId={_id}
            isLoggedIn={isLoggedIn}
            jwt={jwt}
            navigate={navigate}
          />
        </Tab>
        {isLoggedIn && (
          <Tab eventKey='my-posts' title='My Posts'>
            <MyPosts myPosts={myPosts} />
          </Tab>
        )}
      </Tabs>
    </>
  );
};

export default Posts;
