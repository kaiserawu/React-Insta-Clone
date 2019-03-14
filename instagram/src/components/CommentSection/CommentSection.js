import React from 'react';
import Comment from './Comment';

import './CommentSection.css';

class CommentSection extends React.Component {
  render() {
    return (
      <div className='commentSection'>
        {this.props.commentList.map(comment => <Comment username={comment.username} text={comment.text} />)}
        <input type='text' placeholder='Add a comment...'/>
      </div>
    )
  }
}

export default CommentSection;