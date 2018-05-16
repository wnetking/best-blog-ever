import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ListItem = ({ post }) => (
  <article>
    <h5 className='post-title'><Link to={`/post/${post.id}`}> {post.title} </Link></h5>
    <p className='post-meta'>
      Published:
      <span>{post.date.toLocaleDateString()}</span>, view:
      <span>{post.view}</span>
    </p>
    <hr />
  </article>
)

ListItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default ListItem
