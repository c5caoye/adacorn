let db = require('../models/data');
let config = require('../config.json');
var jwt = require('jsonwebtoken');

let memberService = require('./member.service');

let service = {};

service.getAllDepartments = getAllDepartments;
service.getDepartmentByCode = getDepartmentByCode;

module.exports = service;

function getAllDepartments() {
  return new Promise((resolve, reject) => {
    db.Department.find({}, function(err, departments) {
      if (err) {
        reject("Error: Cannot get all members");
      } else {
        resolve({departments: departments});
      }
    })
  })
}

function getDepartmentByCode(code) {
    console.log("Getting Department: " + code);
  return new Promise((resolve, reject) => {
    var regex = new RegExp(["^", code, "$"].join(""), "i");
    db.Department.findOne({
      code: regex
    }, (err, d) => {
      if (err) {
        reject(err)
      } else {
        if (d) {
          resolve(d)
        } else {
          resolve()
        }
      }
    })
  })
}
