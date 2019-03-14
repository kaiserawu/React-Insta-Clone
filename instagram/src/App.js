import React, { Component } from 'react';
import DummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: DummyData
    }
  }
  render() {
    return (
      <div className="App">
        <div className="postList">
          {
            this.state.posts.map(post => <PostContainer content={post} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
