import express from 'express'
import { appRouter, staticRoute } from './app-router'
import graphql from './qraphql'
import Helmet, { HelmetOptions } from 'helmet'

const helmetOpts : HelmetOptions = {
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      "script-src": ["'self'", "http://localhost:35729"],
      "style-src": null,
    }
  },
  crossOriginResourcePolicy: { policy: "cross-origin" }
}


class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    if(process.env.MODE != 'development') {
      this.express.use(Helmet(helmetOpts))
    }
    this.express.use(staticRoute);
		this.express.use('/api', graphql)
    this.express.use('/', appRouter)
  }

	public start(port: number) {
		this.express.listen(port)
	}
}

export default new App()