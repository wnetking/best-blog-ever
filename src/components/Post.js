import React from 'react';

import { connect } from 'react-redux';

const Post = ({ match, data }) => {
  const { id } = match.params;
  const post = data.posts[id - 1];

  return (
    post && (
      <React.Fragment>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </React.Fragment>
    )
  );
};

const mapStateToProps = ({ postReducer }) => ({
  data: postReducer
});

export default connect(mapStateToProps)(Post);
