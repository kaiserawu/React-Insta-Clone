import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div id='header'>
        <div className='logoAndName'>
          <i className="fab fa-instagram logo"></i>
          <div className='verticalLine'></div>
          <h1>Instagram</h1>
        </div>
        <form onSubmit={this.props.handleSubmit}>
          <input className='searchBar' type='text' placeholder='Search' value={this.props.searchInput} onChange={this.props.handleInput}/>
        </form>
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