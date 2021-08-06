import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Post.module.css';
import Comment from '../../Components/Comment/Comment';

function Post({ title, body, authorName, comments }) {
  return (
    <div className={Styles.post}>
      <div className={Styles.previewSection}>
        <h3 className={Styles.title}>{title}</h3>
        <h5 className={Styles.authorName}>{authorName}</h5>
        <p className={Styles.body}>{body}</p>
      </div>
      <div className={Styles.commentsSection}>
        <ul className={Styles.comments}>
          {comments.slice(0, 2).map(({ body, author, id }) => (
            <li key={id} className={Styles.comment}>
              <Comment body={body} authorName={author.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
Post.propTypes = {
  authorName: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comments: PropTypes.array,
};

export default Post;
