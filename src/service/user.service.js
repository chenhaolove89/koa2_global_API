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
    async getUserInfo({ id, user_name, password, type, status,myContribution,myCar,myContributionCar,headImage }) {
        const whereOpt = {}
        id && Object.assign(whereOpt, { id })
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })
        type && Object.assign(whereOpt, { type })
        status && Object.assign(whereOpt, { status })
        myContribution && Object.assign(whereOpt, { myContribution })
        myCar && Object.assign(whereOpt, { myCar })
        myContributionCar && Object.assign(whereOpt, { myContributionCar })
        headImage && Object.assign(whereOpt, { headImage })
        try {
            const project = await User.findOne({ attributes: ['id', 'user_name', 'password', 'type', 'status','headImage','myContributionCar','myCar','myContribution'], where: whereOpt });
            return project ? project.dataValues : null
        } catch (e) {
            return e
        }
    }
    async patchPassword({ id, user_name, password, type, status }){
        try {
            const whereOpt = {id}
            const newUser = {}
            user_name && Object.assign(newUser, { user_name })
            password && Object.assign(newUser, { password })
            type && Object.assign(newUser, { type })
            status && Object.assign(newUser, { status })
            // 根据id修改传入的参数
            const project= await User.update( newUser , {where:whereOpt });
                return project[0] > 0 ? true : false
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserService()
