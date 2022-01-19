

// 引入koa
const Koa = require('koa')
// 实例化koa
const app = new Koa()

const errorHandler = require('./errorHandler')

<<<<<<< HEAD
const router = require('../router')
=======
const userRouter = require('../router/user.route')
const goodRouter = require('../router/goods.route')
>>>>>>> origin/shopping

// 引入body解析包
const KoaBody = require('koa-body')
// 引入cors解决跨域
const cors = require('koa2-cors');

app.use(KoaBody())
// 引入cors解决跨域
app.use(cors());

<<<<<<< HEAD
app.use(router.routes()).use(router.allowedMethods())
=======
app.use(userRouter.routes())
app.use(goodRouter.routes())

>>>>>>> origin/shopping

//统一错误处理
app.on('error',errorHandler)
module.exports = app