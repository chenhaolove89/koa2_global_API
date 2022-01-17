module.exports = (errorType,ctx) => {
    let status = 500
    console.log(errorType)
    switch (errorType.code) {
        case '10001':
            status = 400
            break
        case '10002':
            status = 409
            break
        case'10003':
            status = 406
            break
        case '10102':
            status = 412
            break
        default :
            status = 500
    }
    ctx.status = status
    ctx.body = errorType
}