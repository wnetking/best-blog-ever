import React from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import Search from './Search';

const Home = ({ posts, searchData, inputEmpty }) => (
  <React.Fragment>
    <Search />
    {!inputEmpty && !searchData.length ? (
      <p>No result</p>
    ) : !!searchData.length ? (
      <React.Fragment>
        <p>Have {searchData.length} matches</p>
        <PostList data={searchData} />
      </React.Fragment>
    ) : (
      <PostList data={posts} />
    )}
  </React.Fragment>
);

const mapStateToProps = ({ postReducer, searchReducer }) => ({
  posts: postReducer.posts,
  searchData: searchReducer.data,
  inputEmpty: searchReducer.inputEmpty
});

export default connect(mapStateToProps)(Home);
