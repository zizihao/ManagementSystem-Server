const express = require('express');
const router = express.Router();
const { retrieveUsername } = require('../model/main')
const jwt = require('../util/jwt')

/* GET users listing. */
router.post('/', function (req, res, next) {
    const {username,password} = req.body
    retrieveUsername(username, (err, data) => {
        if (!err) {
            if (data.length === 0) {
                res.send({ code: 201, messge: "登录失败，用户名不存在" });
            } else if (password === data[0].password) {
                res.send({ 
                    code: 200, 
                    messge: "登录成功" ,
                    token:jwt.createToken(username)
                });
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
