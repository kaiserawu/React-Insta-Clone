import React from 'react';

import './CommentSection.css';

class Comment extends React.Component {
  render() {
    return (
      <div className='comment'>
        <p className='commentText'><span className='commentUser'>{this.props.username}</span> {this.props.text}</p>
      </div>
    )
  }
}

export default Comment;