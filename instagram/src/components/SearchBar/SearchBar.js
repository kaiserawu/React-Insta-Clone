import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleInput = e => {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (
      <div id='header'>
        <div className='logoAndName'>
          <i className="fab fa-instagram logo"></i>
          <div className='verticalLine'></div>
          <h1>Instagram</h1>
        </div>
        <input className='searchBar' type='text' placeholder='Search' value={this.state.searchInput} onChange={this.handleInput}/>
        <div className='headerIcons'>
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>
    )
  }
}

export default SearchBar;