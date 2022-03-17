const FileService = require('../service/file.service')
const {fileUploadErr} = require('../constants/err.type')
// const userService = require("../service/user.service");

// 接口接收响应层
class FileController {
    async upLoad(ctx, next) {
        const {
            type,
            readJurisdiction,
            fileUrl
        } = ctx.request.body
        const {user} = ctx.state.user
        // 写入数据库
        try {
            const res = await FileService.createFile({
                type,
                readJurisdiction,
                fileUrl,
                user_id:user.id
            })
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

}


module.exports = new FileController()
