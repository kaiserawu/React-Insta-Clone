import React, { Component } from 'react';
import DummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.postId = 0;
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: DummyData
    });
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="postList">
          {this.state.posts.map(post => {
            this.postId++;
            return (<PostContainer key={this.postId} content={post} />)
          })}
        </div>
      </div>
    );
  }
}

export default App;
