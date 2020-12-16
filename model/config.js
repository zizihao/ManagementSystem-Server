const mysql = require('mysql');

const sqlConfig = mysql.createPool({
    host: '127.0.0.1',  // 数据库服务器的地址
    user: 'root',         // 数据库的账号 
    password: 'root',         // 数据库的密码
    database: 'management-system'     // 数据库名称
})


// 解决mysql的自动关闭和不释放会超时问题，注意getConnection好像有并发问题
function query(sql, callback) {
    sqlConfig.getConnection(function (err, connection) {
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放链接
        });
    });
}


module.exports = query