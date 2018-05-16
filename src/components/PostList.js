import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const PostList = ({ data }) => data.map(post => <ListItem key={post.id} post={post} />)

PostList.propTypes = {
  data: PropTypes.array.isRequired
}

export default PostList
