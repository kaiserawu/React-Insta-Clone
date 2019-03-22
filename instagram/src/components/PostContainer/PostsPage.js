import React, { Component } from 'react';
import styled from 'styled-components';
import DummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPageDiv = styled.div``;

const PostListDiv = styled.div``;

const LogoutButton = styled.button`
  height: 50px;
  width: 200px;
  position:fixed;
  bottom: 20px;
  right: 20px;
`;

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.postId = 0;
    this.state = {
      posts: [],
      activePosts: [],
      searchInput: ''
    }
  }

  componentDidMount() {
    this.setState({
      posts: DummyData,
      activePosts: DummyData
    });
  }

  handleSearchInput = e => {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleSearchSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        activePosts: prevState.posts.filter(post => post.username === prevState.searchInput || prevState.searchInput === '')
      }
    })
  }

  logout = () => {
    localStorage.clear();
    window.location.reload();
  }
  
  render() {
    return (
      <PostsPageDiv>
        <SearchBar searchInput={this.state.searchInput} handleInput={this.handleSearchInput} handleSubmit={this.handleSearchSubmit}/>
        <PostListDiv>
          {this.state.activePosts.map(post => {
            return (<PostContainer key={this.postId++} content={post} currentUser={this.props.currentUser} />)
          })}
        </PostListDiv>
        <LogoutButton onClick={this.logout}>Logout</LogoutButton>
      </PostsPageDiv>
    );
  }
}

export default PostsPage;