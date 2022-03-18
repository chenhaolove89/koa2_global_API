const FileService = require('../service/file.service')
const {fileUploadErr,dataNullErr,searchErr} = require('../constants/err.type')
// const userService = require("../service/user.service");

// 接口接收响应层
class FileController {
    async upLoad(ctx, next) {
        const {
            type,
            readJurisdiction,
            fileUrl
        } = ctx.request.body
        const {id} = ctx.state.user
        // 写入数据库
        try {
            const res = await FileService.createFile({
                type,
                readJurisdiction,
                fileUrl,
                user_id: id
            })
            if(!fileUrl || fileUrl === ''){
                return ctx.app.emit('error', dataNullErr, ctx)
            }
            console.log(res)
            if (res) {
                ctx.body = {
                    data: {
                        ...res
                    },
                    code: 0,
                    message: '文件记录成功'
                }
            }
        } catch (err) {
            ctx.app.emit('error', fileUploadErr, ctx)
        }

    }
    async searchStrategy(ctx, next) {
        const {
            type,
            user_id,
            pages
        } = ctx.request.body
        if(!type) {
            ctx.app.emit('error', dataNullErr, ctx)
            return
        }
        // 从数据库中拿数据
        try{
            const res = await FileService.searchStrategy({type,user_id,pages})
            if(res){
                ctx.body = {
                    data: res,
                    code: 0,
                    message: '查询成功'
                }
            }
        }catch (e) {
            ctx.app.emit('error', searchErr, ctx)
        }
    }
}


module.exports = new FileController()
