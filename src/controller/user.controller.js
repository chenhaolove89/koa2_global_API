const JWT = require('jsonwebtoken')
const {JWT_SECRET} =require('../Base')
const UserService = require('../service/user.service')
const {userRegisterError } = require('../constants/err.type')

// 接口接收响应层
class UserController {
    async register(ctx, next) {
        const {
            user_name,
            password
        } = ctx.request.body
        // 写入数据库
        try {
            const res = await UserService.createUser({
                user_name,
                password
            })
            if (res) {
                ctx.body = {
                    data: {
                        ...res
                    },
                    code: 0,
                    message: '用户注册成功'
                }
            }
        } catch (err) {
            ctx.app.emit('error', userRegisterError, ctx)
        }

    }
    async login(ctx, next) {
        // 设置返回的token
        ctx.body.token = JWT.sign(ctx.body.data,JWT_SECRET,{expiresIn: '1d'})
    }
    async patchPassword(ctx,next){
        console.log(ctx.state.user)
    }
}


module.exports = new UserController()