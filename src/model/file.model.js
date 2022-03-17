const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

// 创建模型
const File = seq.define('zd_file', {
    // 在这里定义模型属性
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '用户id'
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '文件类型 ： 1.攻略 2. 图片  3.杂项',
        defaultValue: 3
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "文件状态：0 正常 1 禁用 2 审核中(默认) 3 审核拒绝",
        defaultValue: 2
    },
    readJurisdiction: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "阅读权限 0 全部可看 1 普通公会成员 2 公会管理 3 admin超级管理员",
        defaultValue: 0
    },
    fileUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "文件地址",
        defaultValue:'',
    },
}, {
    // 这是其他模型参数
});

// File.sync({ force: true })

module.exports = File
