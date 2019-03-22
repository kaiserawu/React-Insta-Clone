import React from 'react';
import styled from 'styled-components';

const CommentDiv = styled.div`
  display: flex;
  font-size: 14px;
`;

const CommentTextP = styled.p`
  margin: 0;
  padding: 8px 0;
`;

const CommentUserSpan = styled.span`
  font-weight: bold;
`;

class Comment extends React.Component {
  render() {
    return (
      <CommentDiv>
        <CommentTextP><CommentUserSpan>{this.props.username}</CommentUserSpan> {this.props.text}</CommentTextP>
      </CommentDiv>
    )
  }
}

export default Comment;