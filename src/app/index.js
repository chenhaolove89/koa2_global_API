

// 引入koa
const Koa = require('koa')
// 实例化koa
const app = new Koa()
//socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    //Socket.io by zhengkai.blog.csdn.net
    socket.on('userCar', (msg) => {
        console.log('received: ' + msg);
        socket.emit("userCar", msg.toUpperCase());
    });
});

const errorHandler = require('./errorHandler')

const router = require('../router')
// 引入body解析包
const KoaBody = require('koa-body')
// 引入cors解决跨域
const cors = require('koa2-cors');



app.use(KoaBody())
// 引入cors解决跨域
app.use(cors());

app.use(router.routes())

//统一错误处理
app.on('error',errorHandler)
module.exports = app
