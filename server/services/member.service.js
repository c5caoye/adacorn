let db = require('../models/data');
let config = require('../config.json');
var jwt = require('jsonwebtoken');

let service = {};

service.getAllMembers = getAllMembers;
service.getMembersByDepartmentCode = getMembersByDepartmentCode;
service.getMemberByStunum = getMemberByStunum;

module.exports = service;

function getAllMembers() {
  return new Promise((resolve, reject) => {
    db.Member.find({}, function(err, members) {
      if (err) {
        reject(err);
      } else {
        resolve({members: members});
      }
    });
  })
}

function getMembersByDepartmentCode(code) {
    return new Promise((resolve, reject) => {
        var regex = new RegExp(["^", code, "$"].join(""), "i");
        db.Member.find({
            department: {
                $in: [regex]
            }
        }, (err, members) => {
            if (err) {
                reject(err);
            } else {
                resolve({members: members});
            }
        });
    })
}

function getMemberByStunum(stunum) {
    return new Promise((resolve, reject) => {
        db.Member.findOne({
            stunum: stunum
        }, (err, member) => {
            if (err) {
                reject(err);
            } else {
                resolve(member);
            }
        });
    })
}
