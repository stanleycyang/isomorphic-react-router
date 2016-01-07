import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Login extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
}
