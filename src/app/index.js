

// 引入koa
const Koa = require('koa')
// 实例化koa
const app = new Koa()

const userRouter = require('../router/user.route')

// 引入body解析包
const KoaBody = require('koa-body')

app.use(KoaBody())

app.use(userRouter.routes())

module.exports = app