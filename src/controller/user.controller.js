const UserService = require('../service/user.service')
// const {userRegisterError} = require('../constants/err.type')


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
                    result: {
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
        ctx.body = '用户登录成功'
    }
}


module.exports = new UserController()