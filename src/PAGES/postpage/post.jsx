import React from 'react';
import userData from './data';
import Media from './media';
import Header from '../navbar/Header';
const Post = () => {
  return (
    <div>
       <Header/>
      <Media userData={userData} />
    </div>
  );
};

export default Post;
