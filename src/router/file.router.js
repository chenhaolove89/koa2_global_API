// 引入koa-router路由组件
const Router = require('koa-router')
// 引入响应层中间件
const fileController = require('../controller/file.controller')
// 引入验证层中间件
const { userValidator, verifyUser, verifyLogin} = require('../middleware/user.middleware')
// 引入加密层中间件
const bcrypt = require('../middleware/bcrypt')
// 引入token验证中间件
const {auth} = require('../middleware/auth.middleware')
// 实例化路由组件
const router = new Router({ prefix: '/file' })

// 文件上传
router.post('/upLoad',auth, fileController.upLoad)
// 用户登录
// router.post('/login', userValidator, verifyLogin, userController.login)
//修改密码接口
// router.patch('/',auth,userValidator,bcrypt.cryptPassword,userController.patchPassword)


module.exports = router
