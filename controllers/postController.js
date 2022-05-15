const { getAllPosts, getOnePost, getLastThreePosts } = require("../models/Post")

const allPosts = getAllPosts()
const lastPosts = getLastThreePosts()

exports.PostController = function (req, res) {
    allPosts.then(function (allPosts) {
        res.render('blog', { allPosts })
    })
}
exports.GetOnePost = function (req, res) {
    const oneP = getOnePost(req.params.id);
    oneP.then(singlePost => {
        res.render('postSinglePage', { singlePost })
    })
}
exports.GetLastThreePosts = function (req, res) {
    lastPosts.then(lastPosts => {
        res.render('index', { lastPosts })
    })
}