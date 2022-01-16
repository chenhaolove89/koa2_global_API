module.exports = (errorType,ctx) => {
    let status = 500
    switch (errorType.code) {
        case '10001':
            status = 400
            break
        case '10002':
            status = 409
            break
        case'10003':
            status = 406
        default :
            status = 500
    }
    ctx.status = status
    ctx.body = errorType
}