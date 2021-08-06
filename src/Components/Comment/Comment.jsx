import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Comment.module.css';

function Comment({ body, authorName }) {
  return (
    <div className={Styles.comment}>
      <h6 className={Styles.authorName}>{authorName}</h6>
      <p className={Styles.body}>{body}</p>
    </div>
  );
}
Comment.propTypes = {
  authorName: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
