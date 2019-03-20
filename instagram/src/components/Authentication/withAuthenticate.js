import React from 'react';

const withAuthenticate = Component => Component2 => {
  return (
    class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          loggedIn: false,
          username: ''
        }
      }

      componentDidMount() {
        const localStoredUser = localStorage.getItem('username');
        if (localStoredUser !== null) {
          this.setState({
            loggedIn: true,
            username: localStoredUser
          })
        } else {
          this.setState({
            loggedIn: false,
            username: ''
          })
        }

      }

      render() {
        if (this.state.loggedIn) {
          return (
            <Component currentUser={this.state.username} />
          )
        } else {
          return (
            <Component2 />
          )
        }
      }
    }
  )
}

export default withAuthenticate;