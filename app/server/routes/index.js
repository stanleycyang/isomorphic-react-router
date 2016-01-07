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
      let err = new Error('Internal Server Error')
      err.static = 500
      next(err)
    }

    const componentHTML = renderToString(<RoutingContext {...renderProps } />)

    const HTML = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Isomorphic Redux Demo</title>
          </head>
          <body>
            <div id="react-view">${componentHTML}</div>
            <script type="application/javascript" src="/bundle.js"></script>
          </body>
      </html>
    `

    res.end(HTML)
  })
})

module.exports = router
