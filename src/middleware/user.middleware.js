const userService = require('../service/user.service');
const {
    userAlreadyExited,
    userFormateError,
    userLengthTest,
    userRegisterError
} = require('../constants/err.type')
const userValidator = async (ctx, next) => {
    const {
        user_name,
        password
    } = ctx.request.body
    // 验证非空
    if (!user_name || !password) {
        ctx.app.emit('error', userFormateError, ctx)
        return
    }
    await next()
}
const verifyUser = async (ctx, next) => {
    const {
        user_name,
        password
    } = ctx.request.body
    // 正则校验只能是数字或字母,最小4位,最大14位
    let reg = /^[A-Za-z0-9]{4,14}$/
    if (reg.test(user_name) && reg.test(password)) {
        try {
            const val = await userService.getUserInfo(user_name)
            // 验证是否已存在
            if (val) {
                console.error('用户名已存在');
                ctx.app.emit('error', userAlreadyExited, ctx)
                return
            }
        } catch (err) {
            console.error('获取用户信息错误', err);
            ctx.app.emit('error', userRegisterError, ctx)
            return
        }
        await next()
    }
    console.error('用户名不能大于14个字符或小于4个字符');
    ctx.app.emit('error', userLengthTest, ctx)
    return
}
module.exports = {
    userValidator,
    verifyUser,
}