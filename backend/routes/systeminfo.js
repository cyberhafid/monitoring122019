var express = require('express');
var router = express.Router();
const fs = require('fs');


var SrcSystem = require('../lib/system');


router.get('/cpu', function (req, res) {

    res.send(SrcSystem.getCpuInfo());
});
router.get('/system', function (req, res) {

    res.send(SrcSystem.getSystemInfo());
});


module.exports = router;