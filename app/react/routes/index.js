import React from 'react'
import { Route, IndexRoute } from 'react-router'

/* Import components */
import App from '../container'
import Home from '../components'

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={Home} />
  </Route>
)
