import React from 'react';

const withAuthenticate = Component => Component2 => {
  return (
    class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          loggedIn: false
        }
      }

      componentDidMount() {
        if (localStorage.getItem('username') !== null) {
          this.setState({
            loggedIn: true
          })
        } else {
          this.setState({
            loggedIn: false
          })
        }

      }

      render() {
        if (this.state.loggedIn) {
          return (
            <Component />
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