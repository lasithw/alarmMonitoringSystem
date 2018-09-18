var express = require('express');
var router = express.Router();
var query = require('../classes/query');

// GET home page.
router.get('/', function (req, res, next) {
    res.json({ name: "abc" })
});

router.get('/getSiteDown2GList', function (req, res, next) {
    console.log(req.body)
    query.siteDown2GList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});

router.get('/getPowerFailure2GList', function (req, res, next) {
    console.log(req.body)
    query.powerFailure2GList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});

router.get('/getHighroom2GList', function (req, res, next) {
    console.log(req.body)
    query.highroom2GList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});

router.get('/getTransmission2GList', function (req, res, next) {
    console.log(req.body)
    query.transmission2GList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});

router.get('/getCellDown2GList', function (req, res, next) {
    console.log(req.body)
    query.callDown2GList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});

router.get('/getrtxDown2GList', function (req, res, next) {
    console.log(req.body)
    query.rtxDown2GList(req.body.type).then((data) => {
            res.json(data)

    }).catch((err) => {
        res.json(err)
    })

});


module.exports = router;  