// 引入koa-router路由组件
const Router = require('koa-router')

const {upload} = require('../controller/goods.controller')

// 实例化路由组件
const router = new Router({ prefix: '/goods' })

router.post('/upload',upload)


module.exports = router