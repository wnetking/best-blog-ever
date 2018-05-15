import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import { getPostsRequest } from '../actions';

import Header from './Header';
import Loading from './Loading';

const PostList = Loadable({
  loader: () => import('./PostList'),
  loading: Loading
});

const Post = Loadable({
  loader: () => import('./Post'),
  loading: Loading
});

class App extends Component {
  componentDidMount() {
    let { getPostsRequest } = this.props;

    getPostsRequest();
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />

          <div className="main-content">
            <Route exact path={`/`} component={PostList} />
            <Route exact path={`/post/:id`} component={Post} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  [getPostsRequest.name]: bindActionCreators(getPostsRequest, dispatch)
});

export default connect(() => ({}), mapDispatchToProps)(App);
