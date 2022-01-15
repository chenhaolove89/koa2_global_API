// 引入koa-router路由组件
const Router = require('koa-router')
const userController = require('../controller/user.controller')
const {userValidator,verifyUser} =require('../middleware/user.middleware')
// 路由层
// 实例化路由组件
const router = new Router({ prefix: '/user' })

// 用户注册
router.post('/register',userValidator,verifyUser, userController.register)
// 用户登录
router.post('/login',userValidator, userController.login)


module.exports = router