import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const PostList = ({ data }) => {
  let { posts } = data;

  return (
    <React.Fragment>
      {posts && posts.map(post => <ListItem key={post.id} post={post} />)}
    </React.Fragment>
  );
};

const mapStateToProps = ({ postReducer }) => ({
  data: postReducer
});

export default connect(mapStateToProps)(PostList);
