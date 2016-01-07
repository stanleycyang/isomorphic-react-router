import React from 'react'
import { Route, IndexRoute } from 'react-router'

/* Import components */
import App from '../container'
import Home from '../components'
import Login from '../components/Login'

export default (
  <Route name="app" component={ App } path='/'>
    <IndexRoute component={ Home } />
    <Route component={ Login } path='login' />
  </Route>
)
