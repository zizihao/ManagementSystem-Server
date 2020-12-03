const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',  // 数据库服务器的地址
    user: 'root',         // 数据库的账号 
    password: 'root',         // 数据库的密码
    database: 'management-system'     // 数据库名称
});

connection.connect();

module.exports = connection