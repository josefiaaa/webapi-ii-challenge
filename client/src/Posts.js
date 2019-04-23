import React from 'react';

import PostCard from './PostCard';
import './App.css';



const Posts = props => {
  return (
    <div className="posts">
      <div className='post-wrap'>
        {props.posts.map(post => {
          return (
            <div className='post'>
              <PostCard
              title={post.title}
              contents={post.contents}
              id={post.id}
              key={post.id}
            />
            </div>
          );
        })}
      </div>
    </div>
  );
}  

export default Posts;