const koarouter = require('koa-router')

const app = require("../app")
const router = new koarouter({
    prefix: '/test'
})


router.get("/get", (ctx)=>{
  ctx.body = "ok"
})

router.post("")

module.exports = router