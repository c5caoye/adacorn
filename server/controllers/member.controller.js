const express = require('express');
const router = express.Router();

const memberService = require('../services/member.service');

router.get('/', getAllMembers);
router.get('/:stunum', getMemberByStunum);
router.get('/dept/:code', getMembersByDepartmentCode);
// router.post('/register', register);

module.exports = router;

function getAllMembers(req, res) {
  console.log("aa")
  memberService.getAllMembers().then(members => {
    if (members) {
      res.send(members);
    } else {
      res.status(401).send('Cannot get members');
    }
  }).catch(err => {
    res.status(400).send(err);
  })
}

function getMemberByStunum(req, res) {
    console.log("Get Member: " + req.params.stunum);
    memberService.getMemberByStunum(req.params.stunum).then(member => {
        if (member) {
            console.log("Got Member: " + req.params.stunum);
            res.send(member);
        } else {
            res.status(401).send('Cannot get member ' + req.params.stunum);
        }
    }).catch(err => {
        res.status(400).send(err);
    })
}

function getMembersByDepartmentCode(req, res) {
    console.log(req.user);
    console.log("Get Members for: " + req.params.code);
    memberService.getMembersByDepartmentCode(req.params.code).then(members => {
        if (members) {
            console.log("Got Members for: " + req.params.code);
            res.send(members);
        } else {
            res.status(401).send('Cannot get department ' + req.params.code);
        }
    }).catch(err => {
        res.status(400).send(err);
    })
}
