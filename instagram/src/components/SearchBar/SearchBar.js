import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 25px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid lightgrey;
`;

const LogoAndNameDiv = styled.div`
  display: flex;
  align-items: center;

  .logo {
    font-size: 50px;
  }
`;

const VerticalLineDiv = styled.div`
  height: 50px;
  margin: 0 30px;
  border-left: 1px solid black;
`;

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 45px;
  letter-spacing: 1px;
  font-family: 'Grand Hotel', cursive;
`;

const SearchBarInput = styled.input`
  text-align: center;
  width: 320px;
  height: 40px;
  font-size: 20px;
  background-color: whitesmoke;
  border-radius: 5px;
`;

const HeaderIconsDiv = styled.div`
  font-size: 35px;
  display: flex;
  align-items: center;

  i {
    margin: 0 20px;
  }
`;

class SearchBar extends React.Component {
  render() {
    return (
      <Header>
        <LogoAndNameDiv>
          <i className="fab fa-instagram logo"></i>
          <VerticalLineDiv />
          <H1>Instagram</H1>
        </LogoAndNameDiv>
        <form onSubmit={this.props.handleSubmit}>
          <SearchBarInput type='text' placeholder='Search' value={this.props.searchInput} onChange={this.props.handleInput} />
        </form>
        <HeaderIconsDiv>
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </HeaderIconsDiv>
      </Header>
    )
  }
}

export default SearchBar;