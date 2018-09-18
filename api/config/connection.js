var mysql = require('mysql');

var db;

var settings = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cams_temp'
};

function connectDatabase(){
    if(!db){
        db = mysql.createConnection(settings);

        db.connect(function(err){ 
            if(!err){
             console.log("Database connected");
            }else{
            console.log("error database"); 
            }
        })
    }

    return db;
}

module.exports = connectDatabase();
