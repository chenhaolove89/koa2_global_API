

// 引入koa
const Koa = require('koa')
// 实例化koa
const app = new Koa()

const userRouter = require('../router/user.route')

app.use(userRouter.routes())

module.exports = app