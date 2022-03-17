const File = require('../model/file.model')

// 数据库操作层
class FileService {
    // 写入用户数据
    async createFile(data) {
        try {
            //写入数据库
            const result = await File.create({
                ...data
            })
            // console.log(result)
            if(result){
                return result.dataValues
            }
        } catch (e) {
            return e
        }
    }
    async searchStrategy({type, user_id,pages={limit:10,offset:0} }){
        const whereOpt = {}
        user_id && Object.assign(whereOpt, { user_id })
        type && Object.assign(whereOpt, { type })
        try {
           const res = await File.findAll({ where: whereOpt,...pages })
            if(res) return res
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new FileService()
