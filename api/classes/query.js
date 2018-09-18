var con = require('../config/connection');

var query = {
    siteDown2GList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms,alarms WHERE filter_alarms.alarm_id = alarms.alarm_id AND filter_alarms.alarm_type_id=2 AND alarms.generation = "2G"';
            var params = [type];
            con.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        console.log(rows);
                    }

                }

            })
        })
    },

    powerFailure2GList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms,alarms WHERE filter_alarms.alarm_id = alarms.alarm_id AND filter_alarms.alarm_type_id=1 AND alarms.generation = "2G"';
            var params = [type];
            con.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        console.log(rows);
                    }

                }

            })
        })
    },

    highroom2GList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms,alarms WHERE filter_alarms.alarm_id = alarms.alarm_id AND filter_alarms.alarm_type_id=3 AND alarms.generation = "2G"';
            var params = [type];
            con.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        console.log(rows);
                    }

                }

            })
        })
    },

    transmission2GList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms,alarms WHERE filter_alarms.alarm_id = alarms.alarm_id AND filter_alarms.alarm_type_id=4 AND alarms.generation = "2G"';
            var params = [type];
            con.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        console.log(rows);
                    }

                }

            })
        })
    },

    callDown2GList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms,alarms WHERE filter_alarms.alarm_id = alarms.alarm_id AND filter_alarms.alarm_type_id=5 AND alarms.generation = "2G"';
            var params = [type];
            con.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        console.log(rows);
                    }

                }

            })
        })
    },

    rtxDown2GList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms,alarms WHERE filter_alarms.alarm_id = alarms.alarm_id AND filter_alarms.alarm_type_id=6 AND alarms.generation = "2G"';
            var params = [type];
            con.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                else {
                    if (rows.length > 0) {
                        resolve(rows);
                        console.log(rows);
                    }

                }

            })
        })
    }
};


module.exports = query;