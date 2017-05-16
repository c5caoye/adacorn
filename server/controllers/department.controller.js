const express = require('express');
const router = express.Router();

const departmentService = require('../services/department.service');

router.get('/', getAllDepartments);
router.get('/:code', getDepartmentByCode);
// router.post('/register', register);

module.exports = router;

function getAllDepartments(req, res) {
  departmentService.getAllDepartments().then(departments => {
    if (departments) {
      res.send(departments);
    } else {
      res.status(401).send('Cannot get departments');
    }
  }).catch(err => {
    res.status(400).send(err);
  })
}

function getDepartmentByCode(req, res) {
    console.log(req.params);
    departmentService.getDepartmentByCode(req.params.code).then(department => {
        console.log("Got Department " + department.name);
        if (department) {
            res.send(department);
        } else {
            res.status(401).send('Cannot get department ' + req.query.code);
        }
    }).catch(err => {
        res.status(400).send(err);
    })
}
