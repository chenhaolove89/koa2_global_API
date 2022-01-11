const { Sequelize } = require('sequelize')

const BaseApi = require('../Base')
const { MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PWD,
    MYSQL_DB, } = BaseApi
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: 'mysql'
})

seq.authenticate().then(_ => {
    console.log('数据库连接成功');
}).catch(e => {
    console.log('数据库连接失败', e);
})
module.exports = seq