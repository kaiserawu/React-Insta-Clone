import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comment from './Comment';

const CommentSectionDiv = styled.div`
  padding: 0 20px;
`;

const TimestampH4 = styled.div`
  margin: 5px 0 10px 0;
  padding: 0;
  font-weight: normal;
  color: grey;
  font-size: 10px;
`;

const HR = styled.hr`
  border-color: lightgrey;
`;

const CommentBoxInput = styled.input`
  height: 30px;
  width: 95%;
  font-size: 14px;
  border: none;
  padding: 0;
  margin: 10px;
  margin-left: 0;
`;

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.commentId = 0;
    this.state = {
      commentList: [],
      newComment: ''
    }
  }

  componentDidMount() {
    this.setState({
      commentList: this.props.commentList
    });
  }

  handleText = e => {
    this.setState({
      newComment: e.target.value
    })
    console.log(this.state.newComment);
  }

  addNewComment = e => {
    e.preventDefault();
    this.setState(prevState => {
      console.log('Adding Comment');
      return {
        commentList: [...prevState.commentList, {
          username: this.props.currentUser,
          text: prevState.newComment
        }],
        newComment: ''
      }
    })
  }

  render() {
    return (
      <CommentSectionDiv>
        {this.state.commentList.map(comment => {
          return (<Comment key={this.commentId++} username={comment.username} text={comment.text} />)
        })}
        <TimestampH4>{this.props.timestamp}</TimestampH4>
        <HR/>
        <form onSubmit={this.addNewComment}>
          <CommentBoxInput type='text' placeholder='Add a comment...' value={this.state.newComment} onChange={this.handleText} />
        </form>
      </CommentSectionDiv>
    )
  }
}

CommentSection.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  }))
}

export default CommentSection;