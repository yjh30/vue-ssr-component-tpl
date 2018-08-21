const Koa = require('koa')
const Router = require('koa-router')
const chalk = require('chalk')
const path = require('path')

const app = new Koa()
const router = new Router()

process.on('uncaughtException', function(err) {
  console.log(chalk.red(err.stack))
  // TODO 错误日志收集
})

app.on('error', function(err, ctx) {
  this.onerror(err) // 默认处理，打印错误堆栈信息
  // TODO 错误日志收集
})

const getSsrData = require('./getSsrData')

router.get('/example', async (ctx, next) => {
  const html = await getSsrData(ctx)
  ctx.body = html
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8081, () => {
  console.log(chalk.green(`You can access http://${require('my-local-ip')()}:8081/example on browser`));
})
