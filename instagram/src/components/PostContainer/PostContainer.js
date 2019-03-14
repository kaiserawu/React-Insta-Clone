import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

class PostContainer extends React.Component {
  render () {
    return (
      <div className='postContainer'>
        <div className='postHeader'>
          <img src={this.props.content.thumbnailUrl} />
          <h2>{this.props.content.username}</h2>
        </div>
        <img src={this.props.content.imageUrl} />
        <CommentSection commentList={this.props.content.comments} />
      </div>
    )
  }
}

export default PostContainer;