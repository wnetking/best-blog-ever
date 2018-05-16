import React from 'react';
import ListItem from './ListItem';

const PostList = ({ data }) =>
  data.map(post => <ListItem key={post.id} post={post} />);

export default PostList;
