import { Router } from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import routes from '../../react/routes'
import path from 'path'

const router = Router()

/* SPA */
router.get('*', (req, res, next) => {
  const location = createLocation(req.url)
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err)
      return res.status(500).end('Internal server error')
    }

    if (!renderProps) return res.status(404).end('Not found')

    res.send(location)
  })
})

module.exports = router
