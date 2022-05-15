const res = require("express/lib/response");
const { Sequelize, DataTypes, where } = require("sequelize");


const conn = require('./db')

const PostCategory = conn.define(`post_category`, {
    // определение атрибутов модели
    id_category: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name_category: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = PostCategory;