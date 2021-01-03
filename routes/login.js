const express = require('express');
const router = express.Router();
const { retrieveUsername } = require('../model/main')
const { createToken } = require('../util/jwt')
const { ResultData } = require('../util/public')

// 用户名不存在
const noneVal =new ResultData(403, false, "登录失败，用户名不存在")
// 错误账号
const errVal = new ResultData(403, false, "登录失败，账号或密码错误")

router.post('/', (req, res) => {
    const { username, password } = req.body
    // 调用 查询用户名 方法
    retrieveUsername(username, (err, data) => {
        if (!err) {
            if (data.length === 0) {
                res.send(noneVal);
            } else if (password === data[0].password) {
                // 成功
                const token = createToken({ username, password })
                const successVal = new ResultData(200, true, "登录成功", null, token)
                res.send(successVal);
            }
            else {
                res.send(errVal);
            }
        } else {
            // 服务器错误
            const errServeVal = new ResultData(500, false, err)
            res.send(errServeVal);
        }
    })
});

module.exports = router;
