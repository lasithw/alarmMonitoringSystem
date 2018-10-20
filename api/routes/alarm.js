var express = require('express');
var router = express.Router();
var query = require('../classes/tablequery');

// GET home page.
router.get('/', function (req, res, next) {
    res.json({ name: "abc" })
});

// //Widgate data
// router.get('/getWidgateData', function (req, res, next) {
//     query.widgetData(req.body.type, req.query.i).then((data) => {
//         res.json(data)

//     }).catch((err) => {
//         res.json(err)
//     })
// });

//Table data
router.get('/getTableData', function (req, res, next) {
    query.tableData(req.body.type, req.query.i, req.query.j).then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err)
    })
});

router.get('/getLocationData', function (req, res, next) {
    query.locationData(req.body.type, req.query.i).then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err)
    })
});

router.get('/getTotalCount', function (req, res, next) {
    query.totalCount(req.body.type, req.query.i).then((data) => {
        res.json(data)

    }).catch((err) => {
        res.json(err)
    })
});

module.exports = router;  