const express = require('express');
const router = express.Router();
const { getIdUserInfo } = require('../model/main')
const { ResultData,newDate } = require('../util/public')

// 参数没有id
const noneId = new ResultData(403, false, "参数错误，没有用户id")
// 没有改用户
const noneUser = new ResultData(403, false, "没有该用户")

console.log(newDate(new Date()));

router.get('/', function (req, res, next) {
    const { id } = req.query
    if (!id) {
        res.send(noneId)
    } else {
        getIdUserInfo(id, (err, data) => {
            if (err) {
                res.send(new ResultData(500, false, "服务器错误", err));
            } else {
                if (data.length < 1) {
                    res.send(noneUser);
                } else {
                    // 成功
                    res.send(new ResultData(200, true, "请求成功", data));
                }
            }
        })
    }
});

module.exports = router;
