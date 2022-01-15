const User = require('../model/user.model')

// 数据库操作层
class UserService {
    // 写入用户数据
    async createUser(data) {
        try {
            //写入数据库
            const result = await User.create({
                ...data
            })
            delete result.dataValues.password
            return result.dataValues
        } catch (e) {
            return e
        }
    }

    async getUserInfo(data) {
        try {
            const project = await User.findOne({ where: { user_name: data } });
            if (project === null) {
                return true
            } else {
                return false
            }
        } catch (e) {
            return e
        }
    }
}

module.exports = new UserService()