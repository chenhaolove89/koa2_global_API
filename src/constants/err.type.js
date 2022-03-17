module.exports = {
    userFormateError: {
        code: '10001',
        message: '用户名或密码为空',
        data: {}
    },
    userAlreadyExited: {
        code: '10002',
        message: '用户已经存在',
        data: {}
    },
    userLengthTest: {
        code: '10003',
        message: '用户名长度不能大于14个字符或小于4个字符,且不能存在空格',
        data: {}
    },
    userRegisterError: {
        code: '10004',
        message: '用户注册错误',
        data: {}
    },
    userInexistence: {
        code: '10005',
        message: '用户不存在',
        data: {}
    },
    passwordNoChange: {
        code: '10006',
        message: '修改密码失败',
        data: {}
    },
    userNameReject: {
        code: '10007',
        message: '用户名不匹配',
        data: {}
    },
    isvalidPassword: {
        code: '10008',
        message: '密码错误',
        data: {}
    },
    tokenExpiredError:{
        code: '10101',
        message: 'token已过期',
        data: {}
    },
    isValideToken:{
        code: '10102',
        message: '无效的token',
        data: {}
    },
    fileUploadErr:{
        code: '10104',
        message: '文件上传失败',
        data: {}
    }
}
