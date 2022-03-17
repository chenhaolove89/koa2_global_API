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
        comment: '用户类型 : 0 客户 1 普通公会成员 2 公会管理 3 admin超级管理员',
        defaultValue: 0
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "用户状态：0 正常 1 禁用 2 审核中(默认) 3 审核拒绝",
        defaultValue: 2
    },
    myContribution: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "成员贡献值",
        defaultValue: 0
    },
    myCar: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "成员参加的公会车",
        defaultValue:'',
        get(){
            return this.getDataValue('myCar').split(',');
        },
        set(value){
            return this.setDataValue('myCar',value.join(','))
        }
    },
    myContributionCar:{
        type: DataTypes.STRING,
        allowNull: false,
        comment: "成员参加的公会贡献车车",
        defaultValue:'',
        get(){
            return this.getDataValue('myContributionCar').split(',');
        },
        set(value){
            return this.setDataValue('myContributionCar',value.join(','))
        }
    },
    headImage: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "成员头像",
        defaultValue: 'https://img2.baidu.com/it/u=1661624596,544958493&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=280'
    }
}, {
    // 这是其他模型参数
});

// User.sync({ force: true })

module.exports = User
