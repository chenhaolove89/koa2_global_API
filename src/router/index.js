const fs = require('fs')

const Router = require('koa-router')
const router = new Router()

fs.readdirSync(__dirname).forEach(item => {
    if (item !== 'index.js') {
        let r = require('./' + item)
        router.use(r.routes())
    }
})
module.exports = router