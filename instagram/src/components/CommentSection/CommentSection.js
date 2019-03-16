import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.commentId = 0;
    this.state = {
      commentList: []
    }
  }

  componentDidMount() {
    this.setState({
      commentList: this.props.commentList
    });
  }

  render() {
    return (
      <div className='commentSection'>
        {this.props.commentList.map(comment => {
          this.commentId++;
          return (<Comment key={this.commentId} username={comment.username} text={comment.text} />)
        })}
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