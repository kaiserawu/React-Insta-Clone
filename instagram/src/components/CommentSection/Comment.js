import React from 'react';

import './CommentSection.css';

class Comment extends React.Component {
  render() {
    return (
      <div>
        <h3 className='commentUser'>{this.props.username}</h3>
        <p className='commentText'>{this.props.text}</p>
      </div>
    )
  }
}

export default Comment;