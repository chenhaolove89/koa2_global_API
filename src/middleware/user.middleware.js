// 引入加密包
const bcrypt = require('bcryptjs')

const userService = require('../service/user.service');
const {
    userAlreadyExited,
    userFormateError,
    userLengthTest,
    userRegisterError,
    userInexistence,
    isvalidPassword,
    passwordNoChange
} = require('../constants/err.type')

// 验证账号密码是否为空
const userValidator = async (ctx, next) => {
    const {
        user_name,
        password
    } = ctx.request.body
    // 验证非空
    if (!user_name || !password) {
        return ctx.app.emit('error', userFormateError, ctx)

    }
    await next()
}

// 注册验证是否重名以及账号密码是否合法
const verifyUser = async (ctx, next) => {
    const {
        user_name,
        password
    } = ctx.request.body
    // 正则校验只能是数字或字母,最小4位,最大14位
    let reg = /^[A-Za-z0-9]{4,14}$/
    if (reg.test(user_name) && reg.test(password)) {
        try {
            const val = await userService.getUserInfo({ user_name })
            // 验证是否已存在
            console.log(val);
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
        return
    }
    console.error('用户名不能大于14个字符或小于4个字符');
    ctx.app.emit('error', userLengthTest, ctx)
    return
}
// 登录验证是否存在以及密码是否正确
const verifyLogin = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    try {
        const {password:userPassword,...val} = await userService.getUserInfo({ user_name })
        if (!val) {
            console.error('用户名不存在');
            return ctx.app.emit('error', userInexistence, ctx)

        }
        if (!bcrypt.compareSync(password, userPassword)) {
            console.error('密码错误');
            return ctx.app.emit('error', isvalidPassword, ctx)
        }
        ctx.body = {
            data: {
                ...val
            },
            code: 0,
            message: '用户登录成功'
        }
        await next()
    } catch (err) {
        console.error('获取用户信息错误', err);
        return ctx.app.emit('error', userRegisterError, ctx)

    }
}
const verifyPatch = async (ctx,next)=>{
    try{
        const {user_name,password} = ctx.request.body
        if(user_name === ctx.state.user.user_name){
            const {id} = ctx.state.user
            userService.patchPassword({id,password})
        }
    }catch (e) {
        console.log(e)
    }
}
module.exports = {
    userValidator,
    verifyUser,
    verifyLogin,
    verifyPatch,
}