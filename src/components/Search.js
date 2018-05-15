import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchRequest, searchResultReset } from '../actions';

import ListItem from './ListItem';

const Search = ({ searchRequest, searchResultReset, data }) => {
  const onChange = e => {
    if (!e.target.value) {
      searchResultReset();

      return;
    }
    searchRequest(e.target.value.toLowerCase());
  };

  const onBlur = () => {
    setTimeout(() => {
      searchResultReset();
    }, 300);
  };

  return (
    <div className="search-wrap">
      <input
        onChange={onChange}
        onBlur={onBlur}
        type="search"
        placeholder="so search, as you wish ..."
      />

      {!!data.length && (
        <div className="search-result">
          {data.map(post => <ListItem key={post.id} post={post} />)}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ searchReducer }) => ({
  data: searchReducer
});

const mapDispatchToProps = dispatch => ({
  [searchRequest.name]: bindActionCreators(searchRequest, dispatch),
  [searchResultReset.name]: bindActionCreators(searchResultReset, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
