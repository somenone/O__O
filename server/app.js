const Koa = require('koa')
const app = new Koa()
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser')
const koarouter = require('koa-router')
const requireDirectory = require('require-directory')

app.use(cors());
require("./db/db")
app.use(bodyParser())

// 将所有的路由加载上,自动加载代码
const modules = requireDirectory(module, './router', { visit: whenLoadModule })

//链接数据库


function whenLoadModule(obj) {
  if (obj instanceof koarouter) {
    app.use(obj.routes(), obj.allowedMethods())
  }
}

// app.use(async(ctx) => {
//     ctx.body = "hello world"
// })

app.listen(3001)