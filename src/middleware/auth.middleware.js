
const JWT = require('jsonwebtoken')
const {JWT_SECRET} = require('../Base')
const {tokenExpiredError,isValideToken} = require('../constants/err.type')
const auth = async (ctx,next)=>{
    // 从请求头中解构出token
    const {authorization} = ctx.request.header
    // 对token处理
    const token = authorization.replace('Bearer ','')
    try {
        // 验证token
        ctx.state.user =  JWT.verify(token,JWT_SECRET)
        await next()
    }catch (err) {
        switch (err.name){
            case  'TokenExpiredError':
                console.error('token已过期',err)
                return ctx.app.emit('error',tokenExpiredError,ctx)
            case 'JsonWebTokenError':
                console.error('无效的token',err)
                return ctx.app.emit('error',isValideToken,ctx)
        }
    }
}

module.exports = {
    auth
}