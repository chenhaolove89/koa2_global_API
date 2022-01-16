const bcrypt = require('bcryptjs')


class crypt {
    // 注册接口加密密码
    async cryptPassword(ctx, next) {
        // 获取盐加密
        const {password} = ctx.request.body
        const salt = bcrypt.genSaltSync(10);
        // hash保存的是密文
        const hash = bcrypt.hashSync(password, salt);
        ctx.request.body.password = hash
        await next()
    }
}


module.exports = new crypt()