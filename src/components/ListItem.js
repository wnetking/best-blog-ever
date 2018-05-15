import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ post }) => (
  <article>
    <h5 className="post-title">
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </h5>
  </article>
);

export default ListItem;
