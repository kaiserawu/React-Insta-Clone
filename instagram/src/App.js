import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
