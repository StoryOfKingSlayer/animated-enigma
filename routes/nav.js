const express = require('express');
const router = express.Router();
const routerIndex = express.Router()
const posts = require('../controllers/postController')


router.get('/', posts.PostController)

router.get('/:id', posts.GetOnePost)

routerIndex.get('/', posts.GetLastThreePosts)

module.exports = {
    routerIndex,
    router
}