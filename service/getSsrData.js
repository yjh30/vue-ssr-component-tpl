const path = require('path')
const LRU = require('lru-cache')
const { createBundleRenderer } = require('vue-server-renderer')
const setupDevServer = require('../build/setup-dev-server.js')

module.exports = async function(ctx) {
  let renderer

  const cb = (serverBundle, { template, clientManifest }) => {
    renderer = createBundleRenderer(serverBundle, {
      runInNewContext: false, // 推荐
      template,
      clientManifest,
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15,
      })
    })
  }

  await setupDevServer(
    ctx.app, 
    path.resolve(__dirname, '../src/index.template.html'), 
    cb
  )

  return new Promise((resolve, reject) => {
    renderer.renderToString(ctx, (err, html) => {
      if (err) {
        reject(err)
        return
      }
      resolve(html)
    })
  })
}
