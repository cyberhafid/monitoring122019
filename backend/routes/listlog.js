var express = require('express');
var router = express.Router();
const fs = require('fs');

var connectlogsarray = require('../tt/logarray');
var connectlogs1 = require('../tt/log');
var connectlogs2 = require('../tt/log2');
var connectlogs3 = require('../tt/log3');



router.get('/list3', function (req, res) {
    res.end(connectlogs3.direBonjour());
});

router.get('/list1', function (req, res) {
    //    res.send(connectlogs);
    //res.writeHead(200, {"Content-Type": "text/plain"});
    fs.readFile('syslog', function (err, data) {
        res.end(data);
    });
});

router.get('/list2', function (req, res) {
    //    res.send(connectlogs);
    res.send(connectlogs2);
});
router.get('/listarray', function (req, res) {
    //    res.send(connectlogs);
    res.send(connectlogsarray);
});

router.get('/temp', function (req, res) {
    //    res.send(connectlogs);
    res.send(temp);
});


router.get('/type', function (req, res) {

    res.send(connectlogs1);
});

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});





module.exports = router;