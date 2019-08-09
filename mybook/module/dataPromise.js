var mysql = require('mysql');
var config = require('./config');
function dataPromise(sql) {
    return new Promise(function (resolve, reject) {
        //1.创建连接
        var conn = mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database
        });
        //2.建立连接
        conn.connect();
        //3.访问数据库
        conn.query(sql, function (err, data) {
            if(!err){
                resolve(data);
            }else{
                reject();
            }
        });
        //4.关闭数据库连接
        conn.end();
    });
}
module.exports = dataPromise;