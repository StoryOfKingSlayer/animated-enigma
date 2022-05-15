const res = require("express/lib/response");
const { Sequelize, DataTypes, where } = require("sequelize");


const conn = require('./db')

const Author = conn.define(`author`, {
    // определение атрибутов модели
    id_author: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
    },
    name_author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: true
    },
    id_role: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
},
    { freezeTableName: true, timestamps: false }
);

async function checkLagacyUser(login) {
    const candidate = await Author.findOne({ raw: true, where: { name_author: login } })
    return candidate
}

async function createNewUser(login, pass) {
    await Author.create({
        id_role: 3,
        name_author: login,
        password: pass,
    }).then(res => {
        console.log(res);
    }).catch(err => console.log(err));
}
module.exports = {
    checkLagacyUser,
    createNewUser,
}