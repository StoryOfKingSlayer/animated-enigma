const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController')



// router.get('/login', auth.Login)
router.get('/', auth.Register)
router.post('/registration', auth.Registration)


module.exports = router