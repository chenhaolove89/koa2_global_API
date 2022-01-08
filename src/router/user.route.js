// 引入koa-router路由组件
const Router = require('koa-router')
const userController = require('../controller/user.controller')

// 实例化路由组件
const router = new Router({ prefix: '/user' })

// 用户注册
router.post('/register', userController.register)
// 用户登录
router.post('/login', userController.login)


module.exports = router