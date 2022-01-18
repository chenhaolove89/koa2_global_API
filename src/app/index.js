

// 引入koa
const Koa = require('koa')
// 实例化koa
const app = new Koa()

const errorHandler = require('./errorHandler')

const userRouter = require('../router/user.route')
const goodRouter = require('../router/goods.route')

// 引入body解析包
const KoaBody = require('koa-body')
// 引入cors解决跨域
const cors = require('koa2-cors');

app.use(KoaBody())
// 引入cors解决跨域
app.use(cors());

app.use(userRouter.routes())
app.use(goodRouter.routes())


//统一错误处理
app.on('error',errorHandler)
module.exports = app