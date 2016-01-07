import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  componentDidMount = () => {
    this.props.history.pushState(null, '/home')
  }

  render() {
    return (
      <div id="app">
        <h1>Isomorphic boilerplate</h1>
        <hr />

        { this.props.children }
      </div>
    )
  }
}
