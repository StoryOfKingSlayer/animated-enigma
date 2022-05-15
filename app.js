const express = require('express');
const path = require('path')
const passport = require('passport')
const session = require('express-session')

const {router, routerIndex} = require('./routes/nav');
const {profiler} = require('./routes/profileRouter')
const auth = require('./routes/authRouter')


const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));
app.set('view engine', 'ejs')


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
});

// ...
app.get('/profile', (req, res) => {
  res.render('profile')
})
app.use('/',routerIndex)
app.use('/blog', router)
app.use('/auth', auth)




