import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchRequest, searchResultReset } from '../actions';

const Search = ({ searchRequest, searchResultReset, str }) => {
  const onChange = e => {
    if (!e.target.value) {
      searchResultReset();

      return;
    }
    searchRequest(e.target.value.toLowerCase());
  };

  return (
    <div className="search-wrap">
      <input
        onChange={onChange}
        type="search"
        value={str}
        placeholder="so search, as you wish ..."
      />
    </div>
  );
};

const mapStateToProps = ({ searchReducer }) => ({
  str: searchReducer.str
});

const mapDispatchToProps = dispatch => ({
  searchRequest: bindActionCreators(searchRequest, dispatch),
  searchResultReset: bindActionCreators(searchResultReset, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
