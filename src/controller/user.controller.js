const JWT = require('jsonwebtoken')
const {JWT_SECRET} =require('../Base')
const UserService = require('../service/user.service')
const {userRegisterError,passwordNoChange,userNameReject } = require('../constants/err.type')
const userService = require("../service/user.service");

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
            console.log(res)
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
        try{
            const {user_name,password} = ctx.request.body
            // 验证传过来的用户名与token中的用户名是否一致
                if(user_name === ctx.state.user.user_name){
                    const {id} = ctx.state.user
                    // 写入数据库
                    const res = await userService.patchPassword({id,password})
                    // 验证是否修改了数据
                    if(res){
                        // 响应结果
                        ctx.body = {
                            data: {},
                            code: 0,
                            message: '密码修改成功'
                        }
                        return
                    }else {
                        // 响应结果
                        ctx.body = {
                            data: {},
                            code: 0,
                            message: '未发生修改'
                        }
                        return
                    }
                }else {
                    ctx.app.emit('error', userNameReject, ctx)
                }
        }catch (e) {
            console.log(e)
            ctx.app.emit('error', passwordNoChange, ctx)
        }
    }
}


module.exports = new UserController()
