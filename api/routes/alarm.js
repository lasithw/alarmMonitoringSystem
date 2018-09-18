var express = require('express');
var router = express.Router();
var query = require('../classes/query');

// GET home page.
router.get('/', function (req, res, next) {
    res.json({ name: "abc" })
});

router.get('/getSiteDownList', function (req, res, next) {
    console.log(req.body)
    query.siteDownList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});

router.get('/getPowerFailureList', function (req, res, next) {
    console.log(req.body)
    query.powerFailureList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});

router.get('/getHighroomList', function (req, res, next) {
    console.log(req.body)
    query.highroomList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});

router.get('/getTransmissionList', function (req, res, next) {
    console.log(req.body)
    query.transmissionList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});

router.get('/getCellDownList', function (req, res, next) {
    console.log(req.body)
    query.callDownList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});

router.get('/getrtxDownList', function (req, res, next) {
    console.log(req.body)
    query.rtxDownList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});


module.exports = router;  