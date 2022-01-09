const UserService = require('../service/user.service')

class UserController {
    async register(ctx, next) {
        console.log(ctx.request.body);
        const { user_name, password } = ctx.request.body
        // 写入数据库
        const res = await UserService.createUser({ user_name, password })

        ctx.body = ctx.request.body
    }
    async login(ctx, next) {
        ctx.body = '用户登录成功'
    }
}


module.exports = new UserController