import React from 'react'
import { connect } from 'react-redux'
import * as t from '../constants'
import orderBy from 'lodash/orderBy'

import PostList from '../components/PostList'

const FilteredPostsList = ({ posts, searchData, inputEmpty }) => (
  <React.Fragment>
    {!inputEmpty && !searchData.length ? (
       <p>
         No result
       </p>
       ) : !!searchData.length ? (
         <React.Fragment>
           <p>
             Have
             <span style={{margin: '0 5px'}}>{searchData.length}</span>matches
           </p>
           <PostList data={searchData} />
         </React.Fragment>
         ) : (
         <PostList data={posts} />
         )}
  </React.Fragment>
)

const getFilteredPostsList = (posts, filter) => {
  switch (filter) {
    case t.filter.BYDATE:
      return orderBy(posts, ['date'], ['desc'])

    case t.filter.BYVIEW:
      return orderBy(posts, ['view'], ['desc'])

    default:
      return posts
  }
}

const mapStateToProps = ({ postReducer, searchReducer, filterReducer }) => ({
  posts: getFilteredPostsList(postReducer.posts, filterReducer),
  searchData: getFilteredPostsList(searchReducer.data, filterReducer),
  inputEmpty: searchReducer.inputEmpty
})

export default connect(mapStateToProps)(FilteredPostsList)
