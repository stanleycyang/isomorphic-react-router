import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class NoMatch extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <h1>404</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
}
