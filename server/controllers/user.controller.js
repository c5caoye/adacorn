const express = require('express');
const router = express.Router();

const userService = require('../services/user.service');

router.post('/auth', auth);
router.post('/register', register);

module.exports = router;

function auth(req, res) {
  // console.log(userService.auth());
  return userService.auth(req.body.username, req.body.password).then(user => {
    if (user) {
      // authentication successful
      res.send(user);
    } else {
      // authentication failed
      res.status(401).send('Username or password is incorrect');
    }
  }).catch(function(err) {
    res.status(400).send(err);
  });
}

function register(req, res) {

}
