var con = require('../config/connection');

var query = {

    //widgetData
    // widgetData(type,i) {
    //     return new Promise((resolve, reject) => {
    //         var sql = 'SELECT count(*) FROM filter_alarms,alarms WHERE filter_alarms.alarm_id = alarms.alarm_id AND filter_alarms.alarm_type_id='+ i +'';
    //         var params = [type, i];
    //         con.query(sql, params, (err, rows) => {
    //             if (err) {
    //                 console.log(err);
    //                 reject(err) 
    //             }
    //             else {
    //                 if (rows.length > 0) {
    //                     resolve(rows);
    //                     console.log(rows);
    //                 }   

    //             }
    //         })
    //     })
    // },

    // Tabledata
    tableData(type,i,j) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT count(*) FROM filter_alarms,alarms WHERE filter_alarms.alarm_id = alarms.alarm_id AND filter_alarms.alarm_type_id='+ i +' AND alarms.generation = "'+ j +'"';
            var params = [type, i, j];
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

    locationData(type,i) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT COUNT(DISTINCT site_id) FROM filter_alarms,alarms WHERE filter_alarms.alarm_id = alarms.alarm_id AND filter_alarms.alarm_type_id='+ i +'';
            var params = [type, i];
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

    totalCount(type,i) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT COUNT(*) FROM filter_alarms,alarms WHERE filter_alarms.alarm_id = alarms.alarm_id AND filter_alarms.alarm_type_id='+ i +' AND (alarms.generation ="2G" OR alarms.generation ="3G" OR alarms.generation ="4G") ';
            var params = [type, i];
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