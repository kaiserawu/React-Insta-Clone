import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  componentDidMount() {
    this.setState({
      likes: this.props.content.likes
    })
  }

  handleLike = e => {
    this.setState(prevState => {
      return {
        likes: ++prevState.likes
      }
    })
  }

  render () {
    return (
      <div className='postContainer'>
        <div className='postHeader'>
          <img className='postThumbnail' src={this.props.content.thumbnailUrl} alt='post thumbnail'/>
          <h2>{this.props.content.username}</h2>
        </div>
        <img className='postMainImg' src={this.props.content.imageUrl} alt='post main img'/>
        <div className='likeAndCommentIcons'>
          <i className="far fa-heart" onClick={this.handleLike}></i>
          <i className="far fa-comment"></i>
        </div>
        <h3 className='likes'>{this.state.likes} likes</h3>
        <CommentSection commentList={this.props.content.comments} timestamp={this.props.content.timestamp}/>
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