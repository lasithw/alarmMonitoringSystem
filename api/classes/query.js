var con = require('../config/connection');

var query = {
    siteDownList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms WHERE alarm_type_id=2';
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

    powerFailureList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms WHERE alarm_type_id=1';
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

    highroomList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms WHERE alarm_type_id=3';
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

    transmissionList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms WHERE alarm_type_id=4';
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

    callDownList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms WHERE alarm_type_id=5';
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

    rtxDownList(type) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms WHERE alarm_type_id=6';
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