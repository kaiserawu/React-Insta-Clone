import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommentSection from '../CommentSection/CommentSection';

const PostContainerDiv = styled.div`
  width: 42%;
  margin: 20px auto;
  border: 1px solid lightgrey;
`;

const PostHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;

  h2 {
    font-size: 14px;
  }
`;

const PostThumbnailImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 0 10px 0 20px;
`;

const PostMainImg = styled.img`
  width: 100%;
`;

const LikeAndCommentIconsDiv = styled.div`
  padding: 8px;

  i {
    font-size: 24px;
    margin: 0 10px;
  }
`;

const LikesH3 = styled.h3`
  margin: 0 20px;
  padding: 0;
  font-size: 14px;
`;

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
      <PostContainerDiv>
        <PostHeaderDiv>
          <PostThumbnailImg src={this.props.content.thumbnailUrl} alt='post thumbnail' />
          <h2>{this.props.content.username}</h2>
        </PostHeaderDiv>
        <PostMainImg src={this.props.content.imageUrl} alt='post main img'/>
        <LikeAndCommentIconsDiv>
          <i className="far fa-heart" onClick={this.handleLike}></i>
          <i className="far fa-comment"></i>
        </LikeAndCommentIconsDiv>
        <LikesH3>{this.state.likes} likes</LikesH3>
        <CommentSection commentList={this.props.content.comments} timestamp={this.props.content.timestamp} currentUser={this.props.currentUser} />
      </PostContainerDiv>
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