const connection = require('./config')

// 获取所有用户数据
const getUsers = function (callback) {
    connection.query('select * from users', (err, results, fields) => {
        callback(err, results)
    })
}

// 根据用户名返回单个用户信息
const retrieveUsername = function (username, callback) {
    connection.query(`select * from users where username = "${username}"`, (err, results, fields) => {
        callback(err, results)
    })
}
// retrieveUsername('111', (err, data) => {
//     console.log(err, data);
// })
module.exports = { getUsers, retrieveUsername }