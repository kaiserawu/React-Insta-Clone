import React, { Component } from 'react';
import DummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

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
  
  render() {
    return (
      <div className="postsPage">
        <SearchBar searchInput={this.state.searchInput} handleInput={this.handleSearchInput} handleSubmit={this.handleSearchSubmit}/>
        <div className="postList">
          {this.state.activePosts.map(post => {
            return (<PostContainer key={this.postId++} content={post} />)
          })}
        </div>
      </div>
    );
  }
}

export default PostsPage;