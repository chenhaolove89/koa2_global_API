// 接口接收响应层
class GoodController {
    async upload(ctx, next) {
        console.log(ctx.request.body)
        ctx.body = {
            data: '上传图片成功'
        }
    }
}


module.exports = new GoodController()