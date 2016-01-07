import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}
