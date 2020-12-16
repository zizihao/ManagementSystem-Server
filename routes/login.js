const express = require('express');
const router = express.Router();
const { retrieveUsername } = require('../model/main')
const { jwt } = require('../util')

const noneVal = {
    code: 10001,
    messge: "登录失败，用户名不存在",
    success: false
}  // 用户名不存在

const errVal = {
    code: 10002,
    messge: "登录失败，账号或密码错误",
    success: false
} // 错误账号

/* GET users listing. */
router.post('/', function (req, res, next) {
    const { username, password } = req.body
    // 调用 查询用户名 方法
    retrieveUsername(username, (err, data) => {
        // 一层-查询失败时是数据库服务错误
        if (!err) {
            // 二层-查用户名和密码是否匹配
            if (data.length === 0) {
                res.send(noneVal);
            } else if (password === data[0].password) {
                // 成功
                const token = jwt.createToken({ username, password })
                res.send({
                    code: 10000,
                    messge: "登录成功",
                    success: true,
                    token
                });
            }
            else {
                res.send(errVal);
            }
        } else {
            res.send({ code: 40000, messge: err, success: false });
        }
    })
});

module.exports = router;
