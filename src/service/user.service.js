const User = require('../model/user.model')

class UserService {
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
}

module.exports = new UserService()