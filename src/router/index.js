
const fs = require('fs')

const Router = require('koa-router')

const router = new Router()

// 读取当前文件夹下文件名来实现自动注册路由
fs.readdirSync(__dirname).forEach(file=>{
    if(file !== 'index.js'){
        let r = require('./' + file)
        router.use(r.routes())
    }
})
module.exports = router
