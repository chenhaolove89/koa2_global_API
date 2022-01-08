// 核心模块
// 第三方模块
const { APP_PORT } = require('./config/config.default')

const app = require('./app')
// 自定义模块


app.listen(APP_PORT, () => {
    console.log(`服务器已启动，${APP_PORT}端口监听中`, 'http://localhost:8000');
})