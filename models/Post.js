const res = require("express/lib/response");
const { Sequelize, DataTypes, where } = require("sequelize");
const PostCategory = require('./Post_category')
const authors = require('./Author')


const conn = require('./db');
const { all } = require("express/lib/application");

const ModelPosts = conn.define("posts", {
    // определение атрибутов модели
    id_posts: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descr: {
        type: Sequelize.STRING,
        allowNull: false
    },
    post_img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});
PostCategory.hasMany(ModelPosts, { foreignKey: 'id_category' })

ModelPosts.belongsTo(PostCategory, { foreignKey: 'id_category' })

async function getAllPosts() {
    const allPosts = ModelPosts.findAll({
        raw: true, include: {
            model: PostCategory,
            attributes: ['name_category']
        }
    })
    return allPosts
}
async function getOnePost(id) {
    const getOnePost = ModelPosts.findByPk(id, { raw: true })
    return getOnePost
}

async function getLastThreePosts() {
    const lastThreePosts = ModelPosts.findAll({ raw: true, order: [['id_posts', 'DESC']], limit: 3 })
    return lastThreePosts
}
module.exports = {
    getAllPosts,
    getOnePost,
    getLastThreePosts,
}