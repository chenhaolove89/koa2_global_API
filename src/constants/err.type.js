// const { message } = require("koa/lib/response");

module.exports = {
    userFormateError: {
        code: '10001',
        message: '用户名或密码为空',
        data:{}
    },
    userAlreadyExited: {
        code: '10002',
        message: '用户已经存在',
        data:{}
    },
    userLengthTest: {
        code: '10003',
        message: '用户名长度不能大于14个字符或小于4个字符,且不能存在空格',
        data:{}
    },
    userRegisterError: {
        code: '10004',
        message: '用户注册错误',
        data:{}
    }
}