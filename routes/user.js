var express = require('express');
var router = express.Router();
var userController = require('../controller/user')
var middleware = require('../controller/middleware')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

router
  .get('/login', userController.login)
  .get('/register', userController.create)


module.exports = router;
