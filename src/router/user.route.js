// 引入koa-router路由组件
const Router = require('koa-router')
// 引入响应层中间件
const userController = require('../controller/user.controller')
// 引入验证层中间件
const { userValidator, verifyUser, verifyLogin } = require('../middleware/user.middleware')
// 引入加密层中间件
const bcrypt = require('../middleware/bcrypt')
// 路由层
// 实例化路由组件
const router = new Router({ prefix: '/user' })

// 用户注册
router.post('/register', userValidator, verifyUser, bcrypt.cryptPassword, userController.register)
// 用户登录
router.post('/login', userValidator, verifyLogin, userController.login)
//修改密码接口
router.patch('/',(ctx,next)=>{ctx.body = '修改密码成功'})


module.exports = router