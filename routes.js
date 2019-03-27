const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
      .add('contact', '/contact', 'contact')
      .add('post', '/blog/:slug', 'blog')
