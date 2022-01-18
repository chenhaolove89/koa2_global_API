const JWT = require('jsonwebtoken')
const {JWT_SECRET} = require('../Base')
const {tokenExpiredError, isValideToken, permissionDenied} = require('../constants/err.type')
const auth = async (ctx, next) => {
    // 从请求头中解构出token
    const {authorization} = ctx.request.header
    if (!authorization) return ctx.app.emit('error', isValideToken, ctx)
    // 对token处理
    const token = authorization.replace('Bearer ', '')
    try {
        // 验证token
        ctx.state.user = JWT.verify(token, JWT_SECRET)
        await next()
    } catch (err) {
        switch (err.name) {
            case  'TokenExpiredError':
                console.error('token已过期', err)
                return ctx.app.emit('error', tokenExpiredError, ctx)
            case 'JsonWebTokenError':
                console.error('无效的token', err)
                return ctx.app.emit('error', isValideToken, ctx)
        }
    }
}
const hadAdminPermission = async (ctx, next) => {
    const user = ctx.state.user
    if (user.type >= 2 && user.status === 0) {
       await next()
    } else {
        console.error('该用户没有管理员权限!')
        return ctx.app.emit('error', permissionDenied, ctx)
    }
}
module.exports = {
    auth,
    hadAdminPermission
}