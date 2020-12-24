const express = require('express');
const router = express.Router();
const { retrieveUsername } = require('../model/main')
const { createToken } = require('../util/jwt')
const { resultData } = require('../util/public')

// 用户名不存在
const noneVal = resultData(10001, false, "登录失败，用户名不存在")
// 错误账号
const errVal = resultData(10002, false, "登录失败，账号或密码错误")

router.post('/', function (req, res) {
    const { username, password } = req.body
    // 调用 查询用户名 方法
    retrieveUsername(username, (err, data) => {
        if (!err) {
            if (data.length === 0) {
                res.send(noneVal);
            } else if (password === data[0].password) {
                // 成功
                const token = createToken({ username, password })
                const successVal = resultData(10000, true, "登录成功", null, token)
                res.send(successVal);
            }
            else {
                res.send(errVal);
            }
        } else {
            // 服务器错误
            const errServeVal = resultData(40000, false, err)
            res.send(errServeVal);
        }
    })
});

module.exports = router;
