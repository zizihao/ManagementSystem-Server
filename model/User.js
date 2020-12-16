const conn = require('./config')

// 获取所有用户数据
const getUsers = function (callback) {
    conn('select * from users', (err, results) => {
        callback(err, results)
    })
}

// 根据用户名返回单个用户信息
const retrieveUsername = function (username, callback) {
    conn(`select * from users where username = "${username}"`, (err, results) => {
        callback(err, results)
    })
}

module.exports = { getUsers, retrieveUsername }