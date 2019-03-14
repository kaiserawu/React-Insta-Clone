import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

class PostContainer extends React.Component {
  render () {
    return (
      <div className='postContainer'>
        <div className='postHeader'>
          <img className='postThumbnail' src={this.props.content.thumbnailUrl} alt='post thumbnail'/>
          <h2>{this.props.content.username}</h2>
        </div>
        <img className='postMainImg' src={this.props.content.imageUrl} alt='post main img'/>
        <CommentSection commentList={this.props.content.comments} />
      </div>
    )
  }
}

PostContainer.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imgUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
}

export default PostContainer;