// let Q = require('q');
let db = require('../models/data');
let config = require('../config.json');
var jwt = require('jsonwebtoken');

let service = {};

service.auth = auth;

module.exports = service;

function auth(username, password) {
  // var deferred = Q.defer();

  return new Promise((resolve, reject) => {
    db.Member.authenticate()(username, password, function(err, user, options) {
      console.log("[Login]: " + username);
      if (err)
        console.log("error") && reject(err.name + ': ' + err.message);
      if (user) {
        resolve({
          stunum: user.stunum,
          firstName: user.firstName,
          lastName: user.lastName,
          token: jwt.sign({
            sub: user.stunum
          }, config.secret)
        });
      } else {
        console.log("wrong password")
        reject("Username or password is incorrect.");
      }
    });
  })
}
