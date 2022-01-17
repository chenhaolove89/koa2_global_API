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
    // 获取用户信息
    async getUserInfo({ id, user_name, password, type, status }) {
        const whereOpt = {}
        id && Object.assign(whereOpt, { id })
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })
        type && Object.assign(whereOpt, { type })
        status && Object.assign(whereOpt, { status })
        try {
            const project = await User.findOne({ attributes: ['id', 'user_name', 'password', 'type', 'status'], where: whereOpt });
            return project ? project.dataValues : null
        } catch (e) {
            return e
        }
    }
    async patchPassword({id,password}){
        try {
            const project = await User.create({ where: { id } });
            console.log(project.dataValues)
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserService()