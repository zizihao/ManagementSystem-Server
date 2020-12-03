const express = require('express');
const router = express.Router();
const { retrieveUsername } = require('../model/main')


/* GET users listing. */
router.post('/', function (req, res, next) {
    console.log(req.body);
    retrieveUsername(req.body.username, (err, data) => {
        if (!err) {
            if (data.length === 0) {
                res.send({ code: 201, messge: "登录失败，用户名不存在" });
            } else if (req.body.password === data[0].password) {
                res.send({ code: 200, messge: "登录成功" });
            }
            else {
                res.send({ code: 201, messge: "登录失败，账号或密码错误" });
            }
        } else {
            res.send({ code: 400, messge: err });
        }
    })
});

module.exports = router;
