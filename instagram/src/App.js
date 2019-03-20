import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate';

import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
