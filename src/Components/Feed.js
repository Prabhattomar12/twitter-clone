import React, { useState, useEffect } from 'react';
import './Feed.css';
import FeedHeader from './FeedHeader';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className='feed'>
      <FeedHeader />
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          avatar={post.avatar}
          text={post.text}
          image={post.image}
          verified={post.verified}
        />
      ))}
    </div>
  );
}

export default Feed;
