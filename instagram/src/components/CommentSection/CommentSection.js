import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

import './CommentSection.css';

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
          username: 'fakeUsername',
          text: prevState.newComment
        }],
        newComment: ''
      }
    })
  }

  render() {
    return (
      <div className='commentSection'>
        {this.state.commentList.map(comment => {
          this.commentId++;
          return (<Comment key={this.commentId} username={comment.username} text={comment.text} />)
        })}
        <h4 className='timestamp'>{this.props.timestamp}</h4>
        <hr/>
        <form onSubmit={this.addNewComment}>
          <input className='commentBox' type='text' placeholder='Add a comment...' value={this.state.newComment} onChange={this.handleText} />
        </form>
      </div>
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