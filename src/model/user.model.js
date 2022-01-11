const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

// 创建模型
const User = seq.define('zd_user', {
    // 在这里定义模型属性
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名'
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '密码'
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '用户类型 : 0 普通用户 1 会员用户 2 Vip用户 3 admin',
        defaultValue: 0
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "用户状态：0 正常 1 禁用 2 审核中(默认) 3 审核拒绝",
        defaultValue: 2
    }
}, {
    // 这是其他模型参数
});

// User.sync({ force: true })

module.exports = User