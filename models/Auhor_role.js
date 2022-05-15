const res = require("express/lib/response");
const { Sequelize, DataTypes, where } = require("sequelize");


const conn = require('./db')

const AuthorRole = conn.define(`author_role`, {
    // определение атрибутов модели
    id_role: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name_role: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
module.exports = AuthorRole;