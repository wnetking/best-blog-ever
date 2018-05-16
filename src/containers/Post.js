import React from 'react'

import { connect } from 'react-redux'

const Post = ({ match, posts }) => {
  const { id } = match.params
  const post = posts[id - 1]

  return (
    post && (
    <React.Fragment>
      <h1>{post.title}</h1>
      <p className='post-meta'>
        Published:
        <span>{post.date.toLocaleDateString()}</span>, view:
        <span>{post.view}</span>
      </p>
      <p>
        {post.body}
      </p>
    </React.Fragment>
    )
  )
}

const mapStateToProps = ({ postReducer }) => ({
  posts: postReducer.posts
})

export default connect(mapStateToProps)(Post)
