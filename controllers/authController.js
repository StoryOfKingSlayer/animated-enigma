const { json } = require("express/lib/response")
const Author = require("../models/Author")

exports.Register = function (req, res) {
    res.render('register')
}

exports.Registration = function (req, res) {

    try {
        const { login, pass } = req.body
        const candidate = Author.checkLagacyUser(login)
        candidate.then(result => {
            if (result) {
                const messege = "Это имя уже занято!" 
                return res.render('register', {messege})
            }
            else {
                Author.createNewUser(login, pass)
                
                return res.redirect("/")
            }
        })

    }
    catch (err) {
        console.log(err);
        res.status(400).json({ messege: "Reg error" })
    }
}